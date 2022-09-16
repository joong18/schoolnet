<script>
  
  import { onMount } from 'svelte';
  import { ports, isAlive } from '../stores';
  import { paintPortColor, paintDeviceDownColor } from '../service/deviceutils.js';

  export let deviceId;
  export let size = {width: "800", height: "100"};
  export let position = {x: "0", y:"0"}
  
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

  onMount(() => {
    showPortStatus();
    afterMount = true;
  });

  $: if(afterMount && deviceId) {
    showPortStatus();
  }

  $: {
    $isAlive.get(deviceId);
    showPortStatus();
  }
</script>

<svg xmlns="http://www.w3.org/2000/svg" x={position.x} y={position.y} width={size.width} height={size.height} viewBox="0 0 229.5 29.5" bind:this={root} id={'d' + deviceId}>
  <g transform="translate(0 -267.5)">
    <rect style="opacity:1;fill:#20a7ee;fill-opacity:1;stroke:#09160a;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.69346732;paint-order:normal" width="228.5" height="28.5" x=".5" y="268" ry="1" rx="1.2"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M112.7 267.7v8.2a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="m116 267.7-.1 1V275.9a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M119.1 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M122.3 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M125.5 267.7v8.2a1 1 0 1 0 1.9 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M128.6 267.7v8.2a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M131.8 267.7v8.2a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M135 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M138.2 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M141.4 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M144.6 267.7v8.2a1 1 0 1 0 1.9 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M147.7 267.7v8.2a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="m151 267.7-.1 1V275.9a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M154.1 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M157.3 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M160.5 267.7v8.2a1 1 0 1 0 1.9 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M163.6 267.7v8.2a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M173.2 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M176.4 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M179.6 267.7v8.2a1 1 0 1 0 1.9 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M182.7 267.7v8.2a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="m186 267.7-.1 1V275.9a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M189.1 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M192.3 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M195.5 267.7v8.2a1 1 0 1 0 1.9 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M198.6 267.7v8.2a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M201.8 267.7v8.2a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M205 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M208.2 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M211.4 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M214.6 267.7v8.2a1 1 0 1 0 1.9 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M217.7 267.7v8.2a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="m221 267.7-.1 1V275.9a1 1 0 1 0 2 0v-8.2z"/>
    <path style="fill:#666f93;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.6;" d="M224.1 267.7v8.2a1 1 0 1 0 2 0V268.7l-.1-1z"/>
    <path style="opacity:1;fill:#a2e2ce;fill-opacity:.52061857;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" d="m56.3 268.2-27.3 28 35.8.1 10.4-10.5-.2-11.6 5.3-6.3-24 .3s0 0 0 0z" transform="translate(-.5)"/>
    <rect style="opacity:1;fill:#9ba9c3;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="36" height="11.2" x="19.1" y="277.5" rx="0" ry="1"/>
    <text xml:space="preserve" x="117.9" y="273.1" transform="scale(.9627 1.03874)"><tspan x="117.9" y="273.1" style="font-weight:700;font-size:2.64px;">1</tspan></text>
    <text xml:space="preserve" x="125.8" y="273.1" transform="scale(.9627 1.03874)"><tspan x="125.8" y="273.1" style="font-weight:700;font-size:2.64px;">2</tspan></text>
    <text xml:space="preserve" x="133.8" y="273" transform="scale(.9627 1.03874)"><tspan x="133.8" y="273"     style="font-weight:700;font-size:2.64px;">3</tspan></text>
    <text xml:space="preserve" x="141.8" y="273" transform="scale(.9627 1.03874)"><tspan x="141.8" y="273"     style="font-weight:700;font-size:2.64px;">4</tspan></text>
    <text xml:space="preserve" x="157.9" y="273" transform="scale(.9627 1.03874)"><tspan x="157.9" y="273"     style="font-weight:700;font-size:2.64px;">5</tspan></text>
    <text xml:space="preserve" x="165.8" y="273" transform="scale(.9627 1.03874)"><tspan x="165.8" y="273"     style="font-weight:700;font-size:2.64px;">6</tspan></text>
    <text xml:space="preserve" x="173.7" y="273" transform="scale(.9627 1.03874)"><tspan x="173.7" y="273"     style="font-weight:700;font-size:2.64px;">7</tspan></text>
    <text xml:space="preserve" x="181.7" y="273" transform="scale(.9627 1.03874)"><tspan x="181.7" y="273"     style="font-weight:700;font-size:2.64px;">8</tspan></text>
    <text xml:space="preserve" x="196.2" y="273" transform="scale(.9627 1.03874)"><tspan x="196.2" y="273"     style="font-weight:700;font-size:2.64px;">9</tspan></text>
    <text xml:space="preserve" x="203" y="273" transform="scale(.9627 1.03874)"><tspan x="203" y="273"         style="font-weight:700;font-size:2.64px;">10</tspan></text>
    <text xml:space="preserve" x="211.4" y="273.1" transform="scale(.9627 1.03874)"><tspan x="211.4" y="273.1" style="font-weight:700;font-size:2.64px;">11</tspan></text>
    <text xml:space="preserve" x="219.1" y="273.1" transform="scale(.9627 1.03874)"><tspan x="219.1" y="273.1" style="font-weight:700;font-size:2.64px;">12</tspan></text>
    <rect style="opacity:1;fill:#fd5;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="36" height="7.7" x="54.5" y="269.3" rx="0" ry=".7"/>
    <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:7.48947477px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458332" x="58.1" y="272" transform="scale(.98845 1.01168)"><tspan x="58.1" y="272" style="font-size:5.64444447px;stroke-width:.26458332">4단계_UTM</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#e3dedb;fill-opacity:1;stroke:none;stroke-width:.26458332" x="8.6" y="275.7"><tspan x="8.6" y="275.7" style="font-size:7.05555556px;fill:#e3dedb;stroke-width:.26458332;-inkscape-font-specification:'Tahoma, Bold';font-family:Tahoma;font-weight:700;font-style:normal;font-stretch:normal;font-variant:normal;text-anchor:start;text-align:start;writing-mode:lr;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal">SECUI</tspan></text>
    <path class="port port-01" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M112.6 286.5v.9H111v4.4h7v-4.4h-1.7v-1z"/>
    <path class="port port-02" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M120.3 286.5v.9h-1.7v4.4h7v-4.4h-1.8v-1z"/>
    <path class="port port-03" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M128 286.5v.9h-1.8v4.4h7v-4.4h-1.7v-1z"/>
    <path class="port port-04" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M135.6 286.5v.9h-1.8v4.4h7v-4.4h-1.7v-1z"/>
    <path class="port port-05" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M151 286.5v.9h-1.6v4.4h7v-4.4h-1.8v-1z"/>
    <path class="port port-06" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M158.7 286.5v.9H157v4.4h7v-4.4h-1.7v-1z"/>
    <path class="port port-07" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M166.4 286.5v.9h-1.7v4.4h7v-4.4h-1.8v-1z"/>
    <path class="port port-08" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M174 286.5v.9h-1.7v4.4h7v-4.4h-1.7v-1z"/>
    <path class="port port-09" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M186.2 286.8v4.6h3.5v-.5h.4v.5h3.5v-4.6H190v.5h-.4v-.5z"/>
    <path class="port port-10" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M194 286.8v4.6h3.5v-.5h.4v.5h3.5v-4.6H198v.5h-.4v-.5z"/>
    <path class="port port-11" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M201.9 286.8v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-12" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M209.8 286.8v4.6h3.5v-.5h.4v.5h3.5v-4.6h-3.5v.5h-.4v-.5z"/>
    <path d="M73.7 291a.8.8 0 1 1-1.7 0c0-.4.4-.8.9-.8.4 0 .8.4.8.8z" style="fill:#ccc;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:.26458332"/>
    <path d="M74.7 291.5a.8.8 0 1 1-1.6 0c0-.4.4-.8.8-.8.5 0 .8.4.8.8z" style="fill:none;stroke:none;stroke-width:.26458332"/>
    <path d="M73.7 285.9a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0z" style="fill:#06f620;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:.26458332"/>
    <path d="M74.7 285.9a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0z" style="fill:none;stroke:none;stroke-width:.26458332"/>
    <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458332" x="64.5" y="287.2"><tspan x="64.5" y="287.2" style="font-size:2.82222223px;fill:#fff;stroke-width:.26458332">PWR</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458332" x="64.5" y="291.9"><tspan x="64.5" y="291.9" style="font-size:2.82222223px;fill:#fff;stroke-width:.26458332">HDD</tspan></text>
    <path style="opacity:1;fill:#fdfdf1;fill-opacity:.96649487;stroke:#000;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.97938143;paint-order:normal" d="M100.8 278.6v.9H99v4.4h7v-4.4h-1.8v-1z"/>
    <path style="opacity:1;fill:#fdfdf1;fill-opacity:.96649487;stroke:#000;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.97938143;paint-order:normal" d="M89.9 286.4v1h-1.7v4.3h7v-4.4h-1.8v-.9z"/>
    <rect style="opacity:1;fill:#1a1a1a;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="8.3" height="3.8" x="98.7" y="284.4" rx="0" ry=".3"/>
    <rect style="fill:#b3b3b3;stroke-width:.26458332" width="5.4" height="1.2" x="100.2" y="285.8" rx="0" ry=".1"/>
    <rect style="opacity:1;fill:#1a1a1a;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="8.3" height="3.8" x="98.7" y="288.3" rx="0" ry=".3"/>
    <rect style="fill:#b3b3b3;stroke-width:.26458332" width="5.4" height="1.2" x="100.2" y="289.6" rx="0" ry=".1"/>
  </g>
</svg>