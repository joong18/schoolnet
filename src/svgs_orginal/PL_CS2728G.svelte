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
      <rect style="opacity:1;fill:#333b4f;fill-opacity:1;stroke:#09160a;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.69346732;paint-order:normal" width="228.5" height="28.5" x=".6" y="268" ry="1" rx="1.2"/>
      <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M188.6 283.5v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
      <path class="port port-26" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M206.8 283.5v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
      <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M196.3 283.5v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
      <path class="port port-28" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M214.7 283.5v4.7h3.4v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
      <g transform="translate(-1.5 -55.9)">
        <path class="port port-01" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M95.5 332.5v1h-1.7v4.3h7v-4.4h-1.7v-1z"/>
        <path class="port port-02" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M99.1 344.7v-.9h1.7v-4.4h-7v4.4h1.8v1z"/>
        <path class="port port-03" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M103.1 332.5v1h-1.7v4.3h7v-4.4h-1.7v-1z"/>
        <path class="port port-04" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M106.8 344.7v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
        <path class="port port-05" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M110.8 332.5v1H109v4.3h7v-4.4h-1.8v-1z"/>
        <path class="port port-06" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M114.4 344.7v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
        <path class="port port-07" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M118.4 332.5v1h-1.7v4.3h7v-4.4H122v-1z"/>
        <path class="port port-08" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M122 344.7v-.9h1.7v-4.4h-7v4.4h1.8v1z"/>
        <path class="port port-09" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M126 332.5v1h-1.6v4.3h7v-4.4h-1.8v-1z"/>
        <path class="port port-10" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M129.7 344.7v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
        <path class="port port-11" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M133.7 332.5v1H132v4.3h7v-4.4h-1.7v-1z"/>
        <path class="port port-12" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M137.3 344.7v-.9h1.7v-4.4h-7v4.4h1.8v1z"/>
        <path class="port port-13" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M143.6 332.5v1h-1.7v4.3h7v-4.4h-1.7v-1z"/>
        <path class="port port-14" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M147.2 344.7v-.9h1.7v-4.4h-7v4.4h1.8v1z"/>
        <path class="port port-15" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M151.2 332.5v1h-1.7v4.3h7v-4.4h-1.7v-1z"/>
        <path class="port port-16" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M154.8 344.7v-.9h1.8v-4.4h-7v4.4h1.7v1z"/>
        <path class="port port-17" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M158.9 332.5v1h-1.7v4.3h7v-4.4h-1.8v-1z"/>
        <path class="port port-18" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M162.5 344.7v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
        <path class="port port-19" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M166.5 332.5v1h-1.7v4.3h7v-4.4h-1.7v-1z"/>
        <path class="port port-20" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M170.1 344.7v-.9h1.7v-4.4h-7v4.4h1.8v1z"/>
        <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M174.2 332.5v1h-1.7v4.3h7v-4.4h-1.8v-1z"/>
        <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M177.8 344.7v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
        <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M181.8 332.5v1h-1.7v4.3h7v-4.4h-1.7v-1z"/>
        <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M185.4 344.7v-.9h1.7v-4.4h-7v4.4h1.8v1z"/>
        <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M190.1 333.4v4.6h3.5v-.5h.4v.5h3.5v-4.6H194v.5h-.4v-.5z"/>
        <path class="port port-25" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M208.3 333.4v4.6h3.5v-.5h.4v.5h3.5v-4.6h-3.5v.5h-.4v-.5z"/>
        <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M197.8 333.4v4.6h3.5v-.5h.4v.5h3.5v-4.6h-3.5v.5h-.4v-.5z"/>
        <path class="port port-27" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M216.2 333.4v4.6h3.4v-.5h.4v.5h3.5v-4.6H220v.5h-.4v-.5z"/>
        <path style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M85.6 332.5v.9H84v4.4h7v-4.4h-1.7v-1z"/>
        <path style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M89.2 344.7v-1H91v-4.3h-7v4.4h1.8v.9z"/>
        <rect style="opacity:1;fill:#e6e6e6;fill-opacity:.98969074;stroke:#090a0e;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="8.3" height="2.3" x="-345" y="78" rx="0" ry=".2" transform="rotate(-90)"/>
        <rect style="fill:#00f;stroke-width:.1;stroke-miterlimit:6.5999999;stroke-dasharray:none;paint-order:stroke fill markers" width="5.4" height=".7" x="-343.6" y="78.8" rx="0" ry=".1" transform="rotate(-90)"/>
      </g>
      <circle style="opacity:1;fill:#f1f413;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" cx="74.2" cy="287.3" r=".8"/>
      <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.11666656px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#2c4cc8;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="62.6" y="288.1"><tspan x="62.6" y="288.1" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#fff;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">POWER</tspan></text>
      <circle style="opacity:1;fill:#98b49b;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" cx="74.2" cy="284.4" r=".8"/>
      <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.11666656px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#2c4cc8;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="62.8" y="285.2"><tspan x="62.8" y="285.2" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#fff;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">ALARM</tspan></text>
      <circle style="opacity:1;fill:#06f620;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" cx="74.2" cy="281.7" r=".8"/>
      <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.11666656px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#2c4cc8;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="62.7" y="282.4"><tspan x="62.7" y="282.4" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#fff;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">STATUS</tspan></text>
      <rect style="opacity:1;fill:#807d7d;fill-opacity:1;stroke:#5f6169;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="21.5" height="4.3" x="5.4" y="274.7" rx="1.4" ry="1.3"/>
      <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:3.52777767px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#fff;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="7.7" y="278.1"><tspan x="7.7" y="278.1" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#fff;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">TiFRONT</tspan></text>
      <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.82222223px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#fff;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="5.4" y="273.6"><tspan x="5.4" y="273.6" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#fff;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">PIOLINK</tspan></text>
      <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:1.41111112px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#fff;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="20" y="273.7"><tspan x="20" y="273.7" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#fff;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">CS Series</tspan></text>
      <text xml:space="preserve" x="98.5" y="264.4" transform="scale(.9627 1.03874)"><tspan x="98.5" y="264.4"   style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">1</tspan></text>
      <text xml:space="preserve" x="106.5" y="264.4" transform="scale(.9627 1.03874)"><tspan x="106.5" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">3</tspan></text>
      <text xml:space="preserve" x="114.4" y="264.4" transform="scale(.9627 1.03874)"><tspan x="114.4" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">5</tspan></text>
      <text xml:space="preserve" x="122.4" y="264.4" transform="scale(.9627 1.03874)"><tspan x="122.4" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">7</tspan></text>
      <text xml:space="preserve" x="130.4" y="264.4" transform="scale(.9627 1.03874)"><tspan x="130.4" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">9</tspan></text>
      <text xml:space="preserve" x="137.3" y="264.4" transform="scale(.9627 1.03874)"><tspan x="137.3" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">11</tspan></text>
      <text xml:space="preserve" x="147.5" y="264.4" transform="scale(.9627 1.03874)"><tspan x="147.5" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">13</tspan></text>
      <text xml:space="preserve" x="155.5" y="264.4" transform="scale(.9627 1.03874)"><tspan x="155.5" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">15</tspan></text>
      <text xml:space="preserve" x="163.4" y="264.4" transform="scale(.9627 1.03874)"><tspan x="163.4" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">17</tspan></text>
      <text xml:space="preserve" x="171.3" y="264.4" transform="scale(.9627 1.03874)"><tspan x="171.3" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">19</tspan></text>
      <text xml:space="preserve" x="179.4" y="264.4" transform="scale(.9627 1.03874)"><tspan x="179.4" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">21</tspan></text>
      <text xml:space="preserve" x="187.3" y="264.4" transform="scale(.9627 1.03874)"><tspan x="187.3" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">23</tspan></text>
      <text xml:space="preserve" x="197.9" y="264.4" transform="scale(.9627 1.03874)"><tspan x="197.9" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">21</tspan></text>
      <text xml:space="preserve" x="205.8" y="264.4" transform="scale(.9627 1.03874)"><tspan x="205.8" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">23</tspan></text>
      <text xml:space="preserve" x="98.5" y="281.6" transform="scale(.9627 1.03874)"><tspan x="98.5" y="281.6"   style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">2</tspan></text>
      <text xml:space="preserve" x="106.5" y="281.6" transform="scale(.9627 1.03874)"><tspan x="106.5" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">4</tspan></text>
      <text xml:space="preserve" x="114.4" y="281.6" transform="scale(.9627 1.03874)"><tspan x="114.4" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">6</tspan></text>
      <text xml:space="preserve" x="122.4" y="281.6" transform="scale(.9627 1.03874)"><tspan x="122.4" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">8</tspan></text>
      <text xml:space="preserve" x="129.3" y="281.6" transform="scale(.9627 1.03874)"><tspan x="129.3" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">10</tspan></text>
      <text xml:space="preserve" x="137.2" y="281.6" transform="scale(.9627 1.03874)"><tspan x="137.2" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">12</tspan></text>
      <text xml:space="preserve" x="147.5" y="281.6" transform="scale(.9627 1.03874)"><tspan x="147.5" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">14</tspan></text>
      <text xml:space="preserve" x="155.4" y="281.6" transform="scale(.9627 1.03874)"><tspan x="155.4" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">16</tspan></text>
      <text xml:space="preserve" x="152" y="302.4" transform="scale(1.03405 .96707)"><tspan x="152" y="302.4"    style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.07">18</tspan></text>
      <text xml:space="preserve" x="171.4" y="281.6" transform="scale(.9627 1.03874)"><tspan x="171.4" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">20</tspan></text>
      <text xml:space="preserve" x="179.3" y="281.6" transform="scale(.9627 1.03874)"><tspan x="179.3" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">22</tspan></text>
      <text xml:space="preserve" x="187.2" y="281.6" transform="scale(.9627 1.03874)"><tspan x="187.2" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">24</tspan></text>
      <text xml:space="preserve" x="197.8" y="281.6" transform="scale(.9627 1.03874)"><tspan x="197.8" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">22</tspan></text>
      <text xml:space="preserve" x="205.8" y="281.6" transform="scale(.9627 1.03874)"><tspan x="205.8" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">24</tspan></text>
      <text xml:space="preserve" x="216.7" y="264.4" transform="scale(.9627 1.03874)"><tspan x="216.7" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">25</tspan></text>
      <text xml:space="preserve" x="224.9" y="264.4" transform="scale(.9627 1.03874)"><tspan x="224.9" y="264.4" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">27</tspan></text>
      <text xml:space="preserve" x="216.7" y="281.6" transform="scale(.9627 1.03874)"><tspan x="216.7" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">26</tspan></text>
      <text xml:space="preserve" x="224.9" y="281.6" transform="scale(.9627 1.03874)"><tspan x="224.9" y="281.6" style="font-weight:700;font-size:2.64px;fill:#fff;stroke-width:.06">28</tspan></text>
      <rect style="display:inline;opacity:1;fill:#fd5;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="41" height="7.7" x="30.1" y="271.4" rx=".1" ry=".7"/>
      <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:7.48947477px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458332" x="32" y="274.1" transform="scale(.98845 1.01168)"><tspan x="32" y="274.1" style="font-size:5.64444447px;stroke-width:.26458332">4단계_보안 L2</tspan></text>
    </g>
  </svg>