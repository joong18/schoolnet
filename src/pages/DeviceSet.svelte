<script>
  import DeviceDetail from './DeviceDetail.svelte';

  import { onMount } from 'svelte';
  import { router } from 'tinro';
  import { v4 as uuid } from 'uuid';
  import DeviceSVG from './DeviceSVG.svelte';
  import { devices, isAlive, currentDevice, links, organ } from '../stores.js';
  
  // import SI_NGF800 from '../svgs/SI_NGF800.svelte';
  // import PL_CS2728G from '../svgs/PL_CS2728G.svelte';
  // import PL_G2128 from '../svgs/PL_G2128.svelte';
  // import CE_C3100 from '../svgs/CE_C3100.svelte';
  // import UQ_E3010 from '../svgs/UQ_E3010.svelte';
  // import UQ_E4020 from '../svgs/UQ_E4020.svelte';

  // const deviceMap = new Map();
  // deviceMap.set('SI_NGF800' , SI_NGF800  );
  // deviceMap.set('PL_CS2728G', PL_CS2728G );
  // deviceMap.set('PL_G2128'  , PL_G2128  );
  // deviceMap.set('CE_C3100'  , CE_C3100  );
  // deviceMap.set('UQ_E3010'  , UQ_E3010  );
  // deviceMap.set('UQ_E4020'  , UQ_E4020  );

  let deviceIndexMap = new Map();     // {deviceId1: 0, deviceId2: 1, deviceId3: 2, ... }
  let deviceLinksMap = new Map();     // {deviceId1: [path1, path2, path3, ...], deviceId2: [path4, path5, path6, ...], ... }
  let viewLinksStatusMap = new Map(); // {deviceId1: true, deviceId2: false, deviceId3: true, ... }
  let pathIndexLinkMap = new Map();   // {pathIndex: {d1:123 , p1:4, d2:456 , p2:7 }, ... }

  let isMounted = false;

  let standWidth = 500;
  let heightGap = 10;
  let position = {x:0, y:0};
  let viewingDevicesIds = [];
  let mountedDeviceSVG = 0;

  let svgSet = null;

  let pathIndex = 0;

  let currentPath = null;
  let currentPathIndex = 0;
  let currentPortCircle1 = null;
  let currentPortCircle2 = null;

  const linkColor = '#F39C12';
  const linkOverColor = '#FF0000';
  const linkPortColor = '#FF0000';

  function viewVariable() {
    console.log(`viewingDevice => ${viewingDevices}`);
    console.log(`links => ${$links}`);
  }

  function getNextPathIndex() {
    pathIndex += 1
    return pathIndex;
  }

  function addMountedDevice() {
    mountedDeviceSVG += 1;
    // console.log(`mountedDeviceSVG Count = ${mountedDeviceSVG}`);
  }

  /**
   * 가로 세로 비를 기준으로 가로의 수치를 넣으면 세로 수치를 돌려줌
   * @param width
   */
  function calcHeight(width) {
    const ratio = 229.5 / 29.5;
    return width / ratio
  }

  async function getLinks(organId) {
    await links.fetchLinks(organId);
  }

  $: isDevicesEmpty = Object.keys($devices).length === 0 ? true : false;
  $: size = {width:standWidth, height:calcHeight(standWidth)};
  $: viewingDevices = $devices.filter( e => e.type !== 'NAC').filter( e => !e.name.includes('VIP')).filter( e => !e.name.includes('AP'));
  $: wrapSvgHeight = (size.height + heightGap) * viewingDevices.length - heightGap;
  $: svgRatio = standWidth / 229.5

  $: if(viewingDevices.length > 0) {
    // console.log(`viewingDevice called. ${viewingDevices}`);
    // console.log(`Device called. ${$devices}`);
    deviceIndexMap = new Map();
    viewLinksStatusMap = new Map();
    viewingDevicesIds = viewingDevices.map(e => e.id);

    viewingDevices.forEach((e,i) => {
      deviceIndexMap.set(e.id, i);
      deviceLinksMap.set(e.id, []);
      viewLinksStatusMap.set(e.id, false);
    });
    if($links.length === 0 && $organ.id) {
      getLinks($organ.id);
    }
  }

  $: if($organ !== {}) {
    console.log(`학교가 바뀌었어요 -> ${$organ.name}`);
  }

  $: if (isMounted && $links.length !== 0 && viewingDevices.length === mountedDeviceSVG && mountedDeviceSVG !==0) {
      console.log('$links length not 0 called.');
      console.log(`links => ${$links}`);
      $links.forEach(e => {
        if(viewingDevicesIds.includes(e.d1) && viewingDevicesIds.includes(e.d2)) {
          try {
            const path1 = drawlink(e.d1, e.p1, e.d2, e.p2);
            const path2 = drawlink(e.d2, e.p2, e.d1, e.p1);
            
            let pathList = deviceLinksMap.get(e.d1);
            if (pathList === undefined) {
              deviceLinksMap.set(e.d1, [path1]);
            } else {
              pathList.push(path1);
            }
            pathList = deviceLinksMap.get(e.d2);
            if (deviceLinksMap.get(e.d2) === undefined) {
              deviceLinksMap.set(e.d2, [path2]);
            } else {
              pathList.push(path2);
            }
          } catch {
            console.log('drawlink Error');
          }
          
        }
      })
    }


  onMount(async () => {
    for (const device in viewingDevices) {
      if($isAlive.get(device.id)){
        ports.fetchPortStatus(device.id);
      }
    }
    if($links.length === 0 && $organ.id) {
      await links.fetchLinks($organ.id);
    }
    console.log('DeviceSet onMounted !!');
    isMounted = true;
  });

  function showLinkLabel(pathIndex, isShow) {

    const link = pathIndexLinkMap.get(pathIndex);
    const beginLabel = document.getElementById(`devLabel-${link.d1}`);
    const beginPort = document.getElementById(`portLabel-${link.d1}`);
    const endLabel = document.getElementById(`devLabel-${link.d2}`);
    const endPort = document.getElementById(`portLabel-${link.d2}`);

    if(isShow) {
      beginLabel.style.visibility = 'visible';
      endLabel.style.visibility = 'visible';
      beginPort.innerText = link.p1
      endPort.innerText = link.p2
    } else {
      beginLabel.style.visibility = 'hidden';
      endLabel.style.visibility = 'hidden';
    }

  }

  function redrawlink(pIndex, path, isMouseOver) {

    if(path === currentPath) return ;

    svgSet.removeChild(path);
    if(isMouseOver) {
      path.setAttribute('stroke', linkOverColor);
      path.style.cursor = 'pointer';
    } else {
      path.setAttribute('stroke', linkColor);
      path.style.cursor = 'default';
    }
    svgSet.appendChild(path)

    if(isMouseOver) {
      showLinkLabel(pIndex, true);
    } else {
      showLinkLabel(pIndex, false);
      if(currentPath !== null) {
        showPath(currentPath, true);
        showLinkLabel(currentPathIndex, true);
      }
    }

  }

  function showPath(path, isShow) {
    if(isShow) {
      svgSet.removeChild(path);
      path.setAttribute('stroke', linkOverColor);
      path.style.cursor = 'pointer';
      svgSet.appendChild(path);
    } else {
      svgSet.removeChild(path);
      path.setAttribute('stroke', linkColor);
      path.style.cursor = 'default';
      svgSet.appendChild(path);
    }
  }

  function showPortCircle(pIndex, isShow) {
    const { d1, p1, d2, p2 } = pathIndexLinkMap.get(pIndex);
    const { x1, y1, x2, y2 } = calcPathPosition(d1, p1, d2, p2);
    if(currentPortCircle1 === null) {
      currentPortCircle1 = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
      currentPortCircle2 = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    }

    currentPortCircle1.setAttribute("cx", x1);
    currentPortCircle1.setAttribute("cy", y1);
    currentPortCircle1.setAttribute("r", 5);
    currentPortCircle1.setAttribute("fill", linkPortColor);
    currentPortCircle1.setAttribute("stroke", linkPortColor);
    currentPortCircle1.setAttribute("stroke-width", 0);

    currentPortCircle2.setAttribute("cx", x2);
    currentPortCircle2.setAttribute("cy", y2);
    currentPortCircle2.setAttribute("r", 5);
    currentPortCircle2.setAttribute("fill", linkPortColor);
    currentPortCircle2.setAttribute("stroke", linkPortColor);
    currentPortCircle2.setAttribute("stroke-width", 0);

    if(isShow) {
      currentPortCircle1.setAttribute("visibility", "visible");
      currentPortCircle2.setAttribute("visibility", "visible");
      svgSet.appendChild(currentPortCircle1);
      svgSet.appendChild(currentPortCircle2);
    } else {
      currentPortCircle1.setAttribute("visibility", "hidden");
      currentPortCircle2.setAttribute("visibility", "hidden");
      svgSet.removeChild(currentPortCircle1);
      svgSet.removeChild(currentPortCircle2);
    }
  }

  function clickLink(pIndex, path) {
    if(currentPath === null) {
      showPath(path, true);
      showLinkLabel(pIndex, true);
      showPortCircle(pIndex, true);
      currentPath = path;
      currentPathIndex = pIndex;
    } else {
      if(currentPath === path) {
        showPath(path, false);
        showLinkLabel(pIndex, false);
        showPortCircle(pIndex, false);
        currentPath = null;
        currentPathIndex = 0;
      } else {
        showPath(currentPath, false);
        showLinkLabel(currentPathIndex, false);
        showPortCircle(pIndex, false);

        showPath(path, true)
        showLinkLabel(pIndex, true);
        showPortCircle(pIndex, true);

        currentPath = path;
        currentPathIndex = pIndex;
      }
    }

  }

  function calcPathPosition(deviceId1, p1, deviceId2, p2) {

    const device1 = svgSet.querySelector(`#d${deviceId1}`);
    const device2 = svgSet.querySelector(`#d${deviceId2}`);
    const dev1Index = deviceIndexMap.get(deviceId1);
    const dev2Index = deviceIndexMap.get(deviceId2);
    const dev1PortString = '.port-' + String(p1).padStart(2,0);
    const dev2PortString = '.port-' + String(p2).padStart(2,0);
    const device1Port = device1.querySelector(dev1PortString);
    const device2Port = device2.querySelector(dev2PortString);
    const box1 = device1Port.getBBox();
    const box2 = device2Port.getBBox();

    const x1 = svgRatio * (box1.x + box1.width/2);
    const y1 = svgRatio * (box1.y + box1.height/2) + (svgRatio * 29.5 + heightGap) * dev1Index;
    const x2 = svgRatio * (box2.x + box2.width/2);
    const y2 = svgRatio * (box2.y + box2.height/2) + (svgRatio * 29.5 + heightGap) * dev2Index;

    return {x1, y1, x2, y2}
  }

  function drawlink(deviceId1, p1, deviceId2, p2) {

    const { x1, y1, x2, y2 } = calcPathPosition(deviceId1, p1, deviceId2, p2);

    const radius = 20;
    const dx = x2 > x1 ? radius : -1 * radius;
    const dy = y2 > y1 ? radius : -1 * radius;

    let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    let pathData = '';
    if(Math.abs(x2-x1) > radius) {
      pathData = `M${x1}, ${y1} v${(y2 - y1)/2 - dy} q ${0}, ${dy} ${dx}, ${dy} h${x2 - x1 - dx*2}  q ${dx}, ${0} ${dx}, ${dy} v${(y2 - y1)/2 - dy}`;
    } else {
      pathData = `M${x1}, ${y1} v${(y2 - y1)/2 - dy} q ${0}, ${dy} ${(x2-x1)/2}, ${dy} q ${(x2-x1)/2}, ${0} ${(x2-x1)/2}, ${dy} v${(y2 - y1)/2 - dy}`;
    }
      
    path.setAttribute('d', pathData );
    path.setAttribute('stroke', linkColor);
    path.setAttribute('stroke-width',5);
    path.setAttribute('stroke-linecap','round');
    path.setAttribute('fill','none');
    path.setAttribute('visibility', 'hidden');

    const pIndex = getNextPathIndex();
    pathIndexLinkMap.set(pIndex, {d1: deviceId1, p1: p1, d2: deviceId2, p2: p2})
    path.addEventListener('mouseover', () => redrawlink(pIndex, path, true));
    path.addEventListener('mouseout', () => redrawlink(pIndex, path, false));
    path.addEventListener('click', () => clickLink(pIndex, path));

    svgSet.appendChild(path);
    return path
  }

  function showLink(deviceId) {
    console.log(`${deviceId} 장비가 선택되었습니다.`);
    
    if(!$links && $links.length !== 0) return;

    const paths = deviceLinksMap.get(deviceId);
    const viewStatus = viewLinksStatusMap.get(deviceId);
    
    if(viewStatus) {
      paths.forEach( p => {
        p.setAttribute('visibility', 'hidden');
        if( p === currentPath) {
          showPath(currentPath, false);
          showLinkLabel(currentPathIndex, false);
          currentPath = null;
          currentPathIndex = 0;
        }
      });
      viewLinksStatusMap.set(deviceId, false);
    } else {
      paths.forEach( p => p.setAttribute('visibility', 'visible'));
      viewLinksStatusMap.set(deviceId, true);
    }

    viewLinksStatusMap.forEach((v, k, o) => {
      const linkButton = document.getElementById(`linkButton-${k}`);
      if(linkButton !== null && $isAlive.get(k)) {
        if(v) {
          linkButton.classList.remove('bg-blue-200');
          linkButton.classList.add('bg-blue-400');
        } else {
          linkButton.classList.remove('bg-blue-400');
          linkButton.classList.add('bg-blue-200');
        }
      }
    });
  }

  function gotoDeviceDetail(deviceId) {
    currentDevice.set(deviceId);
    router.goto("/devicedetail");
  }

</script>

<div class="w-full p-3 ">
  <button on:click={viewVariable}>변수보기</button>
  <div class="m-3 p-3 text-lg border-indigo-400 bg-indigo-100 border-l-8 font-bold ">네트워크 포트 상태</div>
  {#if isDevicesEmpty}
  <h1>아직 어떤 장비도 불러오지 않았습니다.</h1>
  {:else}
  <div class="flex">
    <div class="relative w-44 ml-5">
      {#each viewingDevices as {id, name, nick, ip, mac, project }, i (id)}
        <div class="flex absolute text-sm" style="left: 0px; top:{(size.height + heightGap)*i}px; bottom:{wrapSvgHeight - (size.height + heightGap)*(i+1) + heightGap}px;">
          <!-- <div class="flex-col"> -->
          <div class="w-40 pl-3 py-2 text-[12px] font-bold text-ellipsis overflow-hidden whitespace-nowrap break-all rounded-l-3xl hover:cursor-pointer" 
                class:bg-blue-200={$isAlive.get(id)}
                class:bg-slate-200={!$isAlive.get(id)}
                class:hover:bg-blue-400={$isAlive.get(id)}
                class:hover:bg-slate-400={!$isAlive.get(id)}
              on:click={gotoDeviceDetail(id)}>
            {name}
          </div>
          <div class="absolute bottom-1 right-6 ml-4 mt-1 flex items-center bg-slate-100 px-2 py-1 rounded-md">
            <div class="w-4 h-4 flex justify-center items-center rounded-full border-2"
                  class:border-green-300={$isAlive.get(id)}
                  class:border-red-300={!$isAlive.get(id)} >
              <div class="w-2 h-2 rounded-full"
                  class:bg-green-500={$isAlive.get(id)}
                  class:bg-red-500={!$isAlive.get(id)} >
              </div>
            </div>
            <div class="ml-2 font-bold"
                  class:text-green-700={$isAlive.get(id)}
                  class:text-red-700={!$isAlive.get(id)} > {$isAlive.get(id) ? 'On' : 'Off'}</div>
            <div class="bg-blue-200 grow h-full"> </div>
          </div>
          <div class="w-2" class:bg-blue-300={$isAlive.get(id)} class:bg-slate-300={!$isAlive.get(id)}></div>
          <div class="w-2" class:bg-blue-500={$isAlive.get(id)} class:bg-slate-500={!$isAlive.get(id)}></div>
        </div>
      {/each}
    </div>
    
    <!-- 패딩 -->
    <div class="w-2"></div>

    <svg width={size.width} height={wrapSvgHeight}  bind:this={svgSet}>
      {#each viewingDevices as {id, name, nick, ip, mac, project }, i (id)}
        {position = {x: 0, y: (size.height + heightGap)*i }}
        {deviceIndexMap.set(id, i)}
        <!-- <svelte:component this={deviceMap.get(nick)} {position} {size} deviceId={id} deviceNick={nick} /> -->
        <DeviceSVG {position} {size} deviceId={id} deviceNick={nick} {addMountedDevice} />
      {/each}
    </svg>

    <div class="relative w-24 ml-2">
      {#each viewingDevices as {id, name, nick, ip, mac, project }, i (id)}
        <div class="flex absolute text-sm" style="left: 0px; top:{(size.height + heightGap)*i}px; bottom:{wrapSvgHeight - (size.height + heightGap)*(i+1) + heightGap}px;">
          <div class="w-2" class:bg-blue-500={$isAlive.get(id)} class:bg-slate-500={!$isAlive.get(id)}></div>
          <div class="w-2" class:bg-blue-300={$isAlive.get(id)} class:bg-slate-300={!$isAlive.get(id)}></div>
          <button id="linkButton-{id}" class="grow w-20 p-3 text-[12px] font-bold text-ellipsis overflow-hidden whitespace-nowrap break-all hover:cursor-pointer" 
                  class:bg-blue-200={$isAlive.get(id)}
                  class:bg-slate-200={!$isAlive.get(id)}
                  class:hover:bg-blue-400={$isAlive.get(id)}
                  class:hover:bg-slate-400={!$isAlive.get(id)}
                  on:click={showLink(id)}>
            <div class="text-slate-700">
              <img src="/images/link.svg" class="h-6 w-6 mx-auto" alt="view links"/>
              <div class="mx-auto">링크보기</div>
            </div>
          </button>
        </div>
      {/each}
    </div>

    <div class="relative">
      {#each viewingDevices as {id, name, nick, ip, mac, project }, i (id)}
        <div id="devLabel-{id}" class="flex absolute text-sm" style="visibility: hidden; left: 0px; top:{(size.height + heightGap)*i}px; bottom:{wrapSvgHeight - (size.height + heightGap)*(i+1) + heightGap}px;">
          <div class="flex-col text-slate-700 grow w-20 p-3 text-[12px] font-bold hover:cursor-pointer bg-red-300">
            <div class="mx-auto text-center mb-1">포트번호</div>
            <div id="portLabel-{id}" class="mx-auto text-center bg-red-100 rounded"></div>
          </div>
        </div>
      {/each}
    </div>

  </div>
  {/if}
</div>