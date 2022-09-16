<script>
  import { onMount } from 'svelte';
  import OrganSearch from './OrganSearch.svelte';

  function handleMenu() {
    document.getElementById('dropdown-device').classList.toggle("hidden");
  }

</script>

<OrganSearch />

<aside class="w-64" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
     <ul class="space-y-2">
        <li>
          <a href="/home" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">
             <img src="/images/home_icon.svg"  alt="ipicon" width="23" height="23">
             <span class="ml-3">홈으로</span>
          </a>
        </li>
        <li>
           <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" on:click={handleMenu}>
                <img src="/images/device_icon.svg" alt="devicon" width="30" height="30">
                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">장비관리</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </button>
           <ul id="dropdown-device" class="hidden py-2 space-y-2 ">
                 <li>
                    <a href="/device" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700">요약 보기</a>
                 </li>
                 <li>
                    <a href="/deviceset" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700">모음 보기</a>
                 </li>
                 <li>
                    <a href="/devicedetail" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700">자세히</a>
                 </li>
           </ul>
        </li>
        <li>
          <a href="/ipmgmt" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">
             <img src="/images/ip_icon.svg"  alt="ipicon" width="25" height="25">
             <span class="ml-3">IP 관리</span>
          </a>
        </li>
        <li>
           <a href="/traffic" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">
            <img src="/images/traffic_icon.svg" alt="trafficicon" width="30" height="30">
              <span class="flex-1 ml-3 whitespace-nowrap">트래픽 보기</span>
           </a>
        </li>
        <li>
           <a href="/information" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">
            <img src="/images/info_icon.svg"    alt="infoicon" width="30" height="30">
              <span class="flex-1 ml-3 whitespace-nowrap">부가정보</span>
           </a>
        </li>
        <li>
         <a href="/deviceview" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700">
          <img src="/images/info_icon.svg"    alt="infoicon" width="30" height="30">
            <span class="flex-1 ml-3 whitespace-nowrap">장비보기</span>
         </a>
      </li>
     </ul>
  </div>
</aside>



