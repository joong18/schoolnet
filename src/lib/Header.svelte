<script>
  import { Cake, Logout } from "svelte-heros";
  import { Button, Badge } from "flowbite-svelte";
</script>

<div class="bg-violet-800 p-4 flex items-center justify-between px-10">
  <div class="flex items-center">
    <Cake size="50" class="text-purple-100 inline" />
    <span class="font-semibold text-purple-100 text-2xl ml-3"
      >학교망 관리시스템</span
    >
  </div>
  <div class="flex items-center">
    <div class="mx-5 text-purple-100">
      <p class="text-purple-100">OO초등학교에서 접속하였습니다.</p>
      <span>접속 IP </span><Badge name="10.10.30.100" color="purple" />
    </div>
    <Button textSize="text-sm">
      <Logout class="text-slate-100 inline" />
      <span class="mx-3 text-slate-100">로그아웃</span>
    </Button>
  </div>
</div>
