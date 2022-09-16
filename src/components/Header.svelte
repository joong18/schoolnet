<script>
  import { organ } from '../stores';

  let organName = '';
  $: organName = $organ.name;

</script>

<div class="bg-indigo-800 p-4 flex items-center justify-between px-5">
    <div class="flex items-center">
      <img src="/images/logo2.svg" alt="logoicon" width="80px" height="80px"/>
      <span class="font-semibold text-slate-50 text-2xl ml-5">학교망 관리시스템</span>
    </div>
    <div class="flex items-center">
      <div class="mx-5 text-purple-100">
        <p class="text-purple-100">{organName}에서 접속하였습니다.</p>
        <span>접속 IP : 10.10.30.100 </span>
      </div>
      <div class="flex justify-center items-center w-32 text-slate-100 rounded border-slate-100 border-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><title>Log Out</title><path d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
        <div class="mx-3 text-slate-100">로그아웃</div>
      </div>
    </div>
  </div>