<script>
    import { organ, devices, isAlive } from '../stores';

    $: isOrganEmpty = Object.keys($organ).length === 0 ? true : false;
    $: isDevicesEmpty = $devices.length === 0 ? true : false;
    $: completeIsAlive = $isAlive.size > 0 ? true : false;

    let size = {width:400, height:50};
    let today = new Date().getMonth()+1 + '월 ' + new Date().getDate() + '일';   
    
    //remark test 2022.10.4.
    $: nowTime = new Date().getHours() + ':' + String(new Date().getMinutes()).padStart(2,"0");
    function getNowTime(){         
        nowTime = new Date().getHours() + ':' + String(new Date().getMinutes()).padStart(2,"0");
    }
    setInterval(getNowTime, 10000);
    
</script>



<div class="p-4 grid grid-rows-3 grid-cols-3 gap-4">
{#if isOrganEmpty}
    <h1>아직 어떤 학교 정보도 불러오지 않았습니다.</h1>
{:else}    
    <div class="p-4 bg-white rounded-xl border border-slate-400 border-solid row-span-1 ...">
        <div class="pb-4 px-4 font-bold text-gray-500">접속 IP</div>
        <div class="py-1 px-4 text-gray-700  text-2xl">10.100.100.70</div>
        <div class="py-1 px-4 text-gray-700"><span class="text-lg">211.100.100.70</span><span class="px-1">(공인IP)</span></div>
    </div>
    <div class="p-4 bg-white rounded-xl border border-slate-400 border-solid row-span-1 ...">
        <div class="pb-4 px-4 font-bold text-gray-500">접속 기기 현황</div>
        <div class="py-1 px-4 text-gray-700"><span class="text-lg">유선</span><span class="px-4 text-2xl">150</span></div>
        <div class="py-1 px-4 text-gray-700"><span class="text-lg">무선</span><span class="px-4 text-2xl">200</span></div>
    </div>
    <div class="p-4 bg-white rounded-xl border border-slate-400 border-solid row-span-2 ...">
        <div class="pb-4 px-4 font-bold text-gray-500"><span>금일 트래픽 현황</span><span class="px-4 text-lg">{today}</span></div>
        <div class="py-4 px-4 text-gray-700"><span class="text-lg">현재</span><span class="px-4 text-xl">{nowTime}</span>
            <div class="py-1 px-14 text-gray-700 text-2xl">200Mbps</div>
        </div>
        <div class="py-4 px-4 text-gray-700"><span class="text-lg">최대</span><span class="px-4 text-xl">10:10</span>
            <div class="py-1 px-14 text-gray-700 text-2xl">300Mbps</div>
        </div>        
    </div>
    <div class="p-4 bg-white rounded-xl border border-slate-400 border-solid row-span-1 col-span-2 ...">
        <div class="pb-4 px-4 font-bold text-gray-500">도메인 현황</div>
        <div class="py-1 px-4 text-gray-700  text-2xl">namcheon.es.kr</div>
        <div class="py-1 px-4 text-gray-700"><span class="text-lg">만료일</span><span class="px-1 text-2xl">2022년 9월 20일</span><span class="px-1 text-xl">(5일 남았음)</span></div>
    </div>
    <div class="p-4 bg-white rounded-xl border border-slate-400 border-solid row-span-1 ...">
        <div class="pb-4 px-4 font-bold text-gray-500">문의처</div>
        <div class="py-1 px-4 text-gray-700"><span class="text-lg">학교망</span><span class="px-4 text-2xl">051-860-6253</span></div>
        <div class="py-1 px-4 text-gray-700"><span class="text-lg">학교 홈페이지</span><span class="px-4 text-2xl">070-4018-1054~6</span></div>
    </div>
    <div class="p-4 bg-white rounded-xl border border-slate-400 border-solid row-span-1 col-span-2 ...">
        <div class="pb-4 px-4 font-bold text-gray-500">할당 IP 현황</div>
        <div class="py-1 px-4 text-gray-700"><span class="text-lg">유선대역</span><span class="px-4 text-2xl">10.100.1.0 ~ 10.100.32.255</span></div>
        <div class="py-1 px-4 text-gray-700"><span class="text-lg">무선대역</span><span class="px-4 text-2xl">10.200.1.0 ~ 10.200.32.255</span></div>
    </div>
   
{/if}
</div>
