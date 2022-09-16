<script>
  import './index.css';
  import { Route } from 'tinro';
  import Home from './pages/Home.svelte';
  import Device from './pages/DeviceSummary.svelte';
  import IpMgmt from './pages/ipmgmt.svelte';
  import Traffic from './pages/traffic.svelte';
  import Information from './pages/information.svelte';
  import Header from './components/Header.svelte';
  import Sidemenu from './components/SideMenu.svelte';
  import DeviceDetail from './pages/DeviceDetail.svelte';
  import DeviceSet from './pages/DeviceSet.svelte';
  import DeviceSVG from './pages/DeviceSVG.svelte';
  import Test from './pages/test.svelte';
</script>

<div class="container mx-auto bg-slate-100">
  <Header />
  <div class="flex">
    <div class="w-64">
      <Sidemenu />
    </div>
    <div class="grow">
      <Route path="/" redirect="/home"></Route>
      <Route path="/home"><Home /></Route>

      <Route path="/device"><Device /></Route>
      <Route path="/deviceset"><DeviceSet /></Route>
      <Route path="/devicedetail"><DeviceDetail /></Route>
      
      <Route path="/ipmgmt"><IpMgmt /></Route>
      <Route path="/traffic"><Traffic /></Route>
      <Route path="/information"><Information /></Route>
      <Route path="/deviceview"><Test /></Route>
    </div>
  </div>
</div>


