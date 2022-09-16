<script>
  import { router } from 'tinro';
  import { organ, devices, isAlive, currentDevice } from '../stores';
  
  
  $: isOrganEmpty = Object.keys($organ).length === 0 ? true : false;
  $: isDevicesEmpty = $devices.length === 0 ? true : false;
  $: completeIsAlive = $isAlive.size > 0 ? true : false;

  async function getData(organId) {
    const result = [];
    try {
      if(isOrganEmpty) await organ.fetchOrgan(organId); 
      if(isDevicesEmpty) await devices.fetchDevices(organId); 
      if(!completeIsAlive) await isAlive.fetchIsAlive(organId);
      if(completeIsAlive) {
        const devList = [];
        $devices.forEach(d => {
        devList.push({devId: d.id, isVirtual: d.name.includes('VIP'), alive: $isAlive.get(d.id), type: d.type,
              devName: d.type === 'AP' ? d.location : d.name, icon : `/images/${d.nick}_icon.svg`,
              isSchoolnet : d.project.includes("스쿨넷") })
        });
        result.push({catName : "학교 스쿨넷 장비", data: devList.filter(e => e.isSchoolnet).filter(e => !e.isVirtual)});
        if (devList.filter(e => !e.isSchoolnet).length !== 0) {
          result.push({catName : "학교 무선망 장비", data: devList.filter(e => !e.isSchoolnet)})
        }
      }
    }
    catch (error) {
      throw error;
    }
    return result;
  }

  function gotoDeviceDetail(deviceId) {
      currentDevice.set(deviceId);
      router.goto("/devicedetail");
  }

</script>

<div class="w-full">
  {#await getData($organ.id)}
    <div class="h-screen flex justify-center items-center">
      <div class="flex justify-center items-center border border-blue-600 rounded p-8">
        <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <div class="text-slate-500 text-sm font-bold"> 데이터를 불러오는 중입니다. </div>
      </div>
    </div>
  {:then devicelists}
    {#each devicelists as devicelist}
      <div class="m-3 p-3 text-lg border-indigo-400 bg-indigo-100 border-l-8 font-bold ">{devicelist.catName}</div>
      <div class="m-3 p-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4">
        {#each devicelist.data as {devId, devName, alive, icon, type} }
          <!-- <a href="/devdetail/{devId}"> -->
          <!-- <a href="/deviceset"> -->
            <div class="flex flex-col items-center basis-40 bg-white rounded-lg border shadow-md 
                    text-center h-28 hover:drop-shadow-xl hover:cursor-pointer"
                    class:border-blue-400={alive}
                    class:border-slate-400={!alive}
                    class:hover:bg-blue-100={alive}
                    class:hover:bg-red-100={!alive}
                    on:click={gotoDeviceDetail(devId)}>
              <div class="flex items-center justify-center h-full w-full relative">
                {#if !isAlive}
                    <span class="bg-red-200 text-red-800 text-xs font-semibold rounded px-2  absolute top-1 left-1">OFF</span>
                {/if}
                {#if type === 'AP' || type === 'NAC'}
                  <img src={icon}  alt="switch icon" width="45" height="45"/>
                {:else }
                  <img src={icon}  alt="switch icon" width="70" height="70"/>
                {/if}
              </div>
              <div class="w-full h-[1px] bg-slate-200 text-center" />
              <div class="w-full rounded-b-lg"
                    class:bg-blue-200={alive}
                    class:bg-red-200={!alive}>
                <div class="p-1 text-[12px] font-bold text-ellipsis overflow-hidden whitespace-nowrap break-all" 
                    class:text-blue-900={alive}
                    class:text-red-800={!alive}>{devName}
                </div>
              </div>
            </div>
          <!-- </a> -->
        {/each}
      </div>
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
