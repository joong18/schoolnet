<script>
    import "../app.css";
    import Header from "../lib/Header.svelte";
    import SideMenu from "../lib/SideMenu.svelte";
</script>

<div class="container mx-auto">
    <Header />
    
    <div class="flex">
        <SideMenu />
        <slot />
    </div>
</div>
