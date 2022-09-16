<script>
    import { onMount } from 'svelte';
    import { devices, currentDevice, ports, isAlive } from '../stores';

    import SI_NGF800 from '../svgs/SI_NGF800.svelte';
    import PL_CS2728G from '../svgs/PL_CS2728G.svelte';
    import PL_G2128 from '../svgs/PL_G2128.svelte';
    import CE_C3100 from '../svgs/CE_C3100.svelte';
    import UQ_E3010 from '../svgs/UQ_E3010.svelte';
    import UQ_E4020 from '../svgs/UQ_E4020.svelte';

    let device;
    let deviceComponent;
    let props; 
    let portStore;

    let size = {width:"700", height:"100"};

    const deviceMap = new Map();
    deviceMap.set('SI_NGF800' , SI_NGF800  );
    deviceMap.set('PL_CS2728G', PL_CS2728G );
    deviceMap.set('PL_G2128'  , PL_G2128  );
    deviceMap.set('CE_C3100'  , CE_C3100  );
    deviceMap.set('UQ_E3010'  , UQ_E3010  );
    deviceMap.set('UQ_E4020'  , UQ_E4020  );

    onMount(() => {
        if($currentDevice !== 0){
            device = $devices.filter(d => d.id === $currentDevice)[0];        
            deviceComponent = deviceMap.get(device.nick);
            props = {size: size, deviceId: $currentDevice}
        }
    });

    $: if($currentDevice !== 0){
        device = $devices.filter(d => d.id === $currentDevice)[0];        
        deviceComponent = deviceMap.get(device.nick);
        props = {size: size, deviceId: $currentDevice}
    }

    async function getPortStatus(deviceId) {
        
        if(!ports.hasPortStatusStore(deviceId)) {
            await ports.fetchPortStatus(deviceId);
        }

        portStore = ports.getPortStatusStore(deviceId);
        const portStatus = $portStore[1];
        if(portStatus === undefined) return [];

        return portStatus;
    }

</script>

<div class="w-full">
    <div class="m-3 p-3 text-lg border-indigo-400 bg-indigo-100 border-l-8 font-bold ">장비 세부사항</div>
    <div class="pl-3" style="width:700px;">
        {#if device}
            <h1>{device.name}</h1>
            <svelte:component this={deviceComponent} {...props} />
        {:else}
            <h1>선택된 장비가 없습니다.</h1>
        {/if}
    </div>
    {#await getPortStatus($currentDevice)}
        <h1> 포트 상태를 불러오는 중입니다.</h1>
    {:then portStatus} 
    <div class="px-4 py-2 text-sm" >
        <table class="table-auto p-3 border-collapse border border-slate-400" style="width:700px;">
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