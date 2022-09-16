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
  <g transform="translate(0 -267.5)" style="display:inline">
    <rect style="opacity:1;fill:#e6e6e6;fill-opacity:1;stroke:#09160a;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.69346732;paint-order:normal" width="228.5" height="28.5" x=".5" y="268" ry="1" rx="1.2"/>
    <path class="port port-02" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M8.4 276.5v1H6.7v5h7v-5H12v-1z"/>
    <path class="port port-01" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M12 290.4v-1h1.7v-5h-7v5h1.8v1z"/>
    <path class="port port-04" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M17.1 276.5v1h-1.7v5h7v-5h-1.7v-1z"/>
    <path class="port port-03" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M20.7 290.4v-1h1.7v-5h-7v5h1.8v1z"/>
    <path class="port port-06" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M25.8 276.5v1h-1.7v5h7v-5h-1.7v-1z"/>
    <path class="port port-05" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M29.4 290.4v-1h1.7v-5h-7v5h1.8v1z"/>
    <path class="port port-08" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M34.5 276.5v1h-1.7v5h7v-5h-1.7v-1z"/>
    <path class="port port-07" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M38.1 290.4v-1h1.7v-5h-7v5h1.8v1z"/>
    <path class="port port-10" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M43.2 276.5v1h-1.7v5h7v-5h-1.7v-1z"/>
    <path class="port port-09" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M46.8 290.4v-1h1.7v-5h-7v5h1.8v1z"/>
    <path class="port port-12" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M51.9 276.5v1h-1.7v5h7v-5h-1.7v-1z"/>
    <path class="port port-11" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M55.5 290.4v-1h1.7v-5h-7v5H52v1z"/>
    <path class="port port-14" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M64.4 276.5v1h-1.7v5h7v-5H68v-1z"/>
    <path class="port port-13" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M68 290.4v-1h1.8v-5h-7v5h1.7v1z"/>
    <path class="port port-16" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M73.1 276.5v1h-1.7v5h7v-5h-1.7v-1z"/>
    <path class="port port-15" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M76.7 290.4v-1h1.8v-5h-7v5h1.7v1z"/>
    <path class="port port-18" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M81.8 276.5v1h-1.7v5h7v-5h-1.7v-1z"/>
    <path class="port port-17" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M85.4 290.4v-1h1.8v-5h-7v5h1.7v1z"/>
    <path class="port port-20" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M90.5 276.5v1h-1.7v5h7v-5h-1.7v-1z"/>
    <path class="port port-19" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M94.1 290.4v-1H96v-5h-7v5h1.7v1z"/>
    <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M99.2 276.5v1h-1.7v5h7v-5h-1.7v-1z"/>
    <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M102.8 290.4v-1h1.8v-5h-7v5h1.7v1z"/>
    <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M108 276.5v1h-1.8v5h7v-5h-1.7v-1z"/>
    <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M111.5 290.4v-1h1.8v-5h-7v5h1.7v1z"/>
    <path class="port port-25" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M120.5 284.6v5h4.6v-.7h.5v.7h4.6v-5h-4.6v.5h-.5v-.5z"/>
    <path class="port port-27" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M144 284.6v5h4.5v-.7h.6v.7h4.5v-5h-4.5v.5h-.6v-.5z"/>
    <path class="port port-26" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M132.2 284.6v5h4.6v-.7h.5v.7h4.6v-5h-4.6v.5h-.5v-.5z"/>
    <path class="port port-28" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M155.7 284.6v5h4.6v-.7h.5v.7h4.6v-5h-4.6v.5h-.5v-.5z"/>
    <path style="opacity:1;fill:#dabc6b;fill-opacity:1;stroke:#1818e8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" d="M6.1 271.9H114v2.3H6.1z"/>
    <text xml:space="preserve" x="9.6" y="264.1" transform="scale(.9627 1.03874)"><tspan x="9.6" y="264.1"    style="font-weight:700;font-size:2.64px;">2</tspan></text>
    <text xml:space="preserve" x="18.7" y="264.1" transform="scale(.9627 1.03874)"><tspan x="18.7" y="264.1"  style="font-weight:700;font-size:2.64px;">4</tspan></text>
    <text xml:space="preserve" x="27.7" y="264.1" transform="scale(.9627 1.03874)"><tspan x="27.7" y="264.1"  style="font-weight:700;font-size:2.64px;">6</tspan></text>
    <text xml:space="preserve" x="36.8" y="264.1" transform="scale(.9627 1.03874)"><tspan x="36.8" y="264.1"  style="font-weight:700;font-size:2.64px;">8</tspan></text>
    <text xml:space="preserve" x="44.8" y="264.1" transform="scale(.9627 1.03874)"><tspan x="44.8" y="264.1"  style="font-weight:700;font-size:2.64px;">10</tspan></text>
    <text xml:space="preserve" x="53.8" y="264.1" transform="scale(.9627 1.03874)"><tspan x="53.8" y="264.1"  style="font-weight:700;font-size:2.64px;">12</tspan></text>
    <text xml:space="preserve" x="66.8" y="264.1" transform="scale(.9627 1.03874)"><tspan x="66.8" y="264.1"  style="font-weight:700;font-size:2.64px;">14</tspan></text>
    <text xml:space="preserve" x="75.9" y="264.1" transform="scale(.9627 1.03874)"><tspan x="75.9" y="264.1"  style="font-weight:700;font-size:2.64px;">16</tspan></text>
    <text xml:space="preserve" x="78.9" y="283.6" transform="scale(1.03405 .96707)"><tspan x="78.9" y="283.6" style="font-weight:700;font-size:2.64px;">18</tspan></text>
    <text xml:space="preserve" x="94" y="264.1" transform="scale(.9627 1.03874)"><tspan x="94" y="264.1"      style="font-weight:700;font-size:2.64px;">20</tspan></text>
    <text xml:space="preserve" x="103" y="264.1" transform="scale(.9627 1.03874)"><tspan x="103" y="264.1"    style="font-weight:700;font-size:2.64px;">22</tspan></text>
    <text xml:space="preserve" x="112.1" y="264.1" transform="scale(.9627 1.03874)"><tspan x="112.1" y="264.1"style="font-weight:700;font-size:2.64px;">24</tspan></text>
    <text xml:space="preserve" x="9.6" y="283.3" transform="scale(.9627 1.03874)"><tspan x="9.6" y="283.3"    style="font-weight:700;font-size:2.64px;">1</tspan></text>
    <text xml:space="preserve" x="18.7" y="283.3" transform="scale(.9627 1.03874)"><tspan x="18.7" y="283.3"  style="font-weight:700;font-size:2.64px;">3</tspan></text>
    <text xml:space="preserve" x="27.7" y="283.2" transform="scale(.9627 1.03874)"><tspan x="27.7" y="283.2"  style="font-weight:700;font-size:2.64px;">5</tspan></text>
    <text xml:space="preserve" x="36.8" y="283.3" transform="scale(.9627 1.03874)"><tspan x="36.8" y="283.3"  style="font-weight:700;font-size:2.64px;">7</tspan></text>
    <text xml:space="preserve" x="45.8" y="283.3" transform="scale(.9627 1.03874)"><tspan x="45.8" y="283.3"  style="font-weight:700;font-size:2.64px;">9</tspan></text>
    <text xml:space="preserve" x="53.9" y="283.3" transform="scale(.9627 1.03874)"><tspan x="53.9" y="283.3"  style="font-weight:700;font-size:2.64px;">11</tspan></text>
    <text xml:space="preserve" x="66.9" y="283.3" transform="scale(.9627 1.03874)"><tspan x="66.9" y="283.3"  style="font-weight:700;font-size:2.64px;">13</tspan></text>
    <text xml:space="preserve" x="75.9" y="283.2" transform="scale(.9627 1.03874)"><tspan x="75.9" y="283.2"  style="font-weight:700;font-size:2.64px;">15</tspan></text>
    <text xml:space="preserve" x="84.9" y="283.3" transform="scale(.9627 1.03874)"><tspan x="84.9" y="283.3"  style="font-weight:700;font-size:2.64px;">17</tspan></text>
    <text xml:space="preserve" x="94" y="283.3" transform="scale(.9627 1.03874)"><tspan x="94" y="283.3"       style="font-weight:700;font-size:2.64px;">19</tspan></text>
    <text xml:space="preserve" x="103.1" y="283.3" transform="scale(.9627 1.03874)"><tspan x="103.1" y="283.3" style="font-weight:700;font-size:2.64px;">21</tspan></text>
    <text xml:space="preserve" x="112.1" y="283.3" transform="scale(.9627 1.03874)"><tspan x="112.1" y="283.3" style="font-weight:700;font-size:2.64px;">23</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:8.46666622px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:end;writing-mode:lr-tb;text-anchor:end;opacity:1;fill:#2c4cc8;fill-opacity:1;stroke:#2c4cc8;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="225.4" y="273.8"><tspan x="225.4" y="273.8" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:4.23333311px;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';fill:#2f52b6;fill-opacity:1;stroke:#2f52b6;stroke-width:.40000001;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1"><tspan style="font-size:5.64444447px">C</tspan>ORE <tspan style="font-size:5.64444447px">E</tspan>DGE</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:8.46666622px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:end;writing-mode:lr-tb;text-anchor:end;opacity:1;fill:#2c4cc8;fill-opacity:1;stroke:#2c4cc8;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="226.2" y="278.8"><tspan x="226.2" y="278.8" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:3.52777767px;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';fill:#2f52b6;fill-opacity:1;stroke:#2f52b6;stroke-width:.40000001;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">C3100-24TL</tspan></text>
    <rect style="fill:#00aad4;stroke-width:.26458332" width="45.4" height="2.3" x="119.9" y="280.7" rx="1.3" ry=".6"/>
    <text xml:space="preserve" x="119.3" y="292.1" transform="scale(1.03405 .96707)"> <tspan x="119.3" y="292.1"  style="font-weight:700;font-size:2.64px;">25</tspan></text>
    <text xml:space="preserve" x="140.4" y="272" transform="scale(.9627 1.03874)">    <tspan x="140.4" y="272"    style="font-weight:700;font-size:2.64px;">26</tspan></text>
    <text xml:space="preserve" x="152.6" y="272" transform="scale(.9627 1.03874)">    <tspan x="152.6" y="272"    style="font-weight:700;font-size:2.64px;">27</tspan></text>
    <text xml:space="preserve" x="164.8" y="272.4" transform="scale(.9627 1.03874)">  <tspan x="164.8" y="272.4"  style="font-weight:700;font-size:2.64px;">28</tspan></text>
    <rect style="opacity:1;fill:#fd5;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="50.2" height="7.7" x="139.8" y="270.5" rx=".1" ry=".7"/>
    <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:7.48947477px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458332" x="145.1" y="273.1" transform="scale(.98845 1.01168)"><tspan x="145.1" y="273.1" style="font-size:5.64444447px;stroke-width:.26458332">4단계_L2 스위치</tspan></text>
  </g>
</svg>