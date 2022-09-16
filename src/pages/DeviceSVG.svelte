<script>

    import { onMount } from 'svelte';
    import { ports, isAlive } from '../stores';
    import { paintPortColor, paintDeviceDownColor } from '../service/deviceutils.js';

    export let deviceId ;
    export let deviceNick ;
    export let size = {width: "800", height: "100"};
    export let position = {x: "0", y:"0"};
    export let addMountedDevice = () => {};

    let root = null;
    let portStore ;
    let afterMount = false; 

    async function showPortStatus() {

        if(!root) return;

        if(!ports.hasPortStatusStore(deviceId)) {
            await ports.fetchPortStatus(deviceId);
        }

        portStore = ports.getPortStatusStore(deviceId);
        
        if($portStore[1] === undefined) return;

        if($isAlive.get(deviceId)) {
            paintPortColor($portStore[1], root);
        } else {
            paintDeviceDownColor(root);
        }

    }

    onMount(async () => {
        await fetch(`/device_svg/${deviceNick}.svg`)
            .then(response => response.text())
            .then(svgText => {

                const svgDoc = new DOMParser().parseFromString(svgText, 'application/xml');
                root = svgDoc.documentElement;
                root.setAttribute("x", position.x );
                root.setAttribute("y", position.y );
                root.setAttribute('width', size.width );
                root.setAttribute('height', size.height );
                root.id = 'd' + String(deviceId);

                const dummySVG = document.getElementById(`object-${deviceId}`);
                const parentDom = dummySVG.parentNode;
                parentDom.removeChild(dummySVG);
                parentDom.appendChild(root);
                showPortStatus();
            });
            
        afterMount = true;  
        console.log('DeviceSVG Mounted');
        addMountedDevice();
    });

    $: if(afterMount && deviceId) {
        showPortStatus();
    }

    $: {
        $isAlive.get(deviceId);
        showPortStatus();
    }
</script>

<svg id="object-{deviceId}"></svg>