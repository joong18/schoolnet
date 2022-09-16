<script>
  import SI_NGF800 from '../svgs/SI_NGF800.svelte';
  import PL_CS2728G from '../svgs/PL_CS2728G.svelte';
  import PL_G2128 from '../svgs/PL_G2128.svelte';
  import CE_C3100 from '../svgs/CE_C3100.svelte';
  import UQ_E3010 from '../svgs/UQ_E3010.svelte';
  import UQ_E4020 from '../svgs/UQ_E4020.svelte';
  import { meta } from 'tinro';

  const route = meta();  

  export let deviceId;
  let deviceName = '';
  let deviceNick = '';
  let devicePortStatus = { 1: true };
  let devicePortList = [];

  async function fetchData() {
    const res = await fetch(`http://mrtg.busanedu.net:3509/api/device/${route.params.devid}/status`);
    // const res = await fetch(`http://mrtg3.busanedu.net:3509/api/device/${deviceId}/status`);
    const data = await res.json();

    if (res.ok) {
      deviceName = data.name;
      deviceNick = data.nick;
      devicePortStatus = data.data;
      devicePortList = Object.entries(data.data).map(e => Object.assign({index:e[0]}, e[1])).sort( (a, b) => Number(a.index) - Number(b.index));
      return devicePortList
    } else {
      throw new Error(data);
    }
  }

</script>

<div class="w-full">
  {#await fetchData()}
    <h1> 포트 상태를 불러오는 중입니다.</h1>
  {:then portStatus} 
    <div class="m-3 p-3 text-lg border-indigo-400 bg-indigo-100 border-l-8 font-bold ">{deviceName} ({deviceNick})</div>
    <div class="pl-3">
      {#if deviceNick === 'SI_NGF800'}
        <SI_NGF800 ports={portStatus} handleReload={fetchData} {deviceId}/>
      {:else if deviceNick === 'PL_CS2728G'}
        <PL_CS2728G ports={portStatus} handleReload={fetchData} {deviceId}/>
      {:else if deviceNick === 'PL_G2128'}
        <PL_G2128 ports={portStatus} handleReload={fetchData} {deviceId}/>
      {:else if deviceNick === 'CE_C3100'}
        <CE_C3100 ports={portStatus} handleReload={fetchData} {deviceId}/>
      {:else if deviceNick === 'UQ_E3010'}
        <UQ_E3010 ports={portStatus} handleReload={fetchData} {deviceId}/>
      {:else if deviceNick === 'UQ_E4020'}
        <UQ_E4020 ports={portStatus} handleReload={fetchData} {deviceId}/>
      {:else}
        <h1>해당 장비의 이미지가 아직 준비되지 않았습니다.</h1>
      {/if}
    </div>
    <div class="px-4 py-2 text-sm">
      <table class="table-auto w-3/4 p-3 border-collapse border border-slate-400">
        <thead>
          <tr class="border border-slate-300 text-center h-8 bg-indigo-200 font-bold">
            <td class="border border-slate-300 w-20">Port번호</td>
            <td class="border border-slate-300">포트명</td>
            <td class="border border-slate-300">포트상태</td>
            <td class="border border-slate-300">속도(Mbps)</td>
          </tr>
        </thead>
        <tbody>
          {#each portStatus as { index, name, port, speed, status} }
            {#if port !== null}
              {#if status === "up"}
                <tr class="border border-slate-300 text-center h-8 bg-green-100">
                  <td class="border border-slate-300">{port}</td>
                  <td class="border border-slate-300">{name}</td>
                  <td class="border border-slate-300">{status}</td>
                  <td class="border border-slate-300">{speed}</td>
                </tr>
              {:else }
                <tr class="border border-slate-300 text-center h-8 bg-red-50">
                  <td class="border border-slate-300">{port}</td>
                  <td class="border border-slate-300">{name}</td>
                  <td class="border border-slate-300">{status}</td>
                  <td class="border border-slate-300">{speed}</td>
                </tr>
              {/if}
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
  
</div>