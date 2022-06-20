<script>
    import { Sidebar, SidebarGroup, SidebarWrapper, SidebarItem } from 'flowbite-svelte';
    import { ChartPie, ViewGrid, InboxIn, User, Login, Cog } from 'svelte-heros';
</script>

<Sidebar >
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="장비 관리" icon={{ name: ChartPie }} href="/device" />
      <SidebarItem label="IP 관리" icon={{ name: ViewGrid }} href="/ipmgmt" />
      <SidebarItem label="트래픽 보기" icon={{ name: InboxIn }} href="/traffic"/>
      <SidebarItem label="부가정보" icon={{ name: User }} href="/information" />
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
