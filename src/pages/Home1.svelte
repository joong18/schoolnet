<script>
    import { organ, devices, isAlive } from '../stores';

    $: isOrganEmpty = Object.keys($organ).length === 0 ? true : false;
    $: isDevicesEmpty = $devices.length === 0 ? true : false;
    $: completeIsAlive = $isAlive.size > 0 ? true : false;

    let size = {width:400, height:50};
</script>



<div class="p-3 text-sm">
{#if isOrganEmpty}
    <h1>아직 어떤 학교 정보도 불러오지 않았습니다.</h1>
{:else}
    <table class="table-auto w-full p-3 border-collapse border border-slate-400">
        <tr class="border border-slate-300 text-center h-8">
            <td class="border border-slate-300  bg-green-100">학교(기관)명</td>
            <td class="border border-slate-300">{$organ.name}</td>
        </tr>
        <tr class="border border-slate-300 text-center h-8 ">
            <td class="border border-slate-300  bg-green-100">설립</td>
            <td class="border border-slate-300">{$organ.buildbase}</td>
        </tr>
        <tr class="border border-slate-300 text-center h-8 ">
            <td class="border border-slate-300  bg-green-100">관할교육청</td>
            <td class="border border-slate-300">{$organ.ctrlorg}</td>
        </tr>
        <tr class="border border-slate-300 text-center h-8 ">
            <td class="border border-slate-300  bg-green-100">홈페이지 주소</td>
            <td class="border border-slate-300">{$organ.homepage}</td>
        </tr>
    </table>
{/if}
<br />

{#if isDevicesEmpty}
    <h1>아직 어떤 장비 정보도 불러오지 않았습니다.</h1>
{:else}
    <table class="table-auto w-full p-3 border-collapse border border-slate-400">
        <thead>
            <tr class="border border-slate-300 text-center h-8 bg-indigo-200 font-bold">
                <td class="border border-slate-300 w-20">번호</td>
                <td class="border border-slate-300">장비명</td>
                <td class="border border-slate-300">별칭</td>
                <td class="border border-slate-300">IP</td>
                <td class="border border-slate-300">MAC</td>
                <td class="border border-slate-300">사업명</td>
            </tr>
        </thead>
        {#each $devices as {id, name, nick, ip, mac, project }}
        <tbody>
            <tr class="border border-slate-300 text-center h-8 bg-indigo-50">
                <td class="border border-slate-300 w-20">{id}</td>
                <td class="border border-slate-300">{name}</td>
                <td class="border border-slate-300">{nick}</td>
                <td class="border border-slate-300">{ip}</td>
                <td class="border border-slate-300">{mac}</td>
                <td class="border border-slate-300">{project}</td>
            </tr>
        </tbody>
        {/each}
    </table>
{/if}
</div>