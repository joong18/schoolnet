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
    <rect style="opacity:1;fill:#d9dde8;fill-opacity:1;stroke:#09160a;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.69346732;paint-order:normal" width="228.5" height="28.5" x=".6" y="268" ry="1" rx="1.2"/>
    <g transform="matrix(1 0 0 .68234 -3 48.6)" style="stroke-width:1.2105993">
      <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M193.3 343v6.9h3.5v-.9h.4v.9h3.5V343h-3.5v.8h-.4v-.8z"/>
      <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M201 343v6.9h3.5v-.9h.4v.9h3.5V343h-3.5v.8h-.4v-.8z"/>
      <path class="port port-01" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M98.7 333v1.3H97v6.5h7v-6.5h-1.8V333z"/>
      <path class="port port-02" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M102.3 350.9v-1.3h1.7V343h-7v6.4h1.7v1.4z"/>
      <path class="port port-03" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M106.3 333v1.3h-1.7v6.5h7v-6.5H110V333z"/>
      <path class="port port-04" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M110 350.9v-1.3h1.6V343h-7v6.4h1.8v1.4z"/>
      <path class="port port-05" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M114 333v1.3h-1.7v6.5h7v-6.5h-1.8V333z"/>
      <path class="port port-06" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M117.6 350.9v-1.3h1.7V343h-7v6.4h1.7v1.4z"/>
      <path class="port port-07" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M121.6 333v1.3H120v6.5h7v-6.5h-1.7V333z"/>
      <path class="port port-08" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M125.2 350.9v-1.3h1.7V343h-7v6.4h1.8v1.4z"/>
      <path class="port port-09" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M129.3 333v1.3h-1.8v6.5h7v-6.5h-1.7V333z"/>
      <path class="port port-10" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M132.9 350.9v-1.3h1.7V343h-7v6.4h1.7v1.4z"/>
      <path class="port port-11" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M136.9 333v1.3h-1.7v6.5h7v-6.5h-1.8V333z"/>
      <path class="port port-12" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M140.5 350.9v-1.3h1.7V343h-7v6.4h1.8v1.4z"/>
      <path class="port port-13" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M146.8 333v1.3H145v6.5h7v-6.5h-1.8V333z"/>
      <path class="port port-14" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M150.4 350.9v-1.3h1.7V343h-7v6.4h1.7v1.4z"/>
      <path class="port port-15" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M154.4 333v1.3h-1.7v6.5h7v-6.5H158V333z"/>
      <path class="port port-16" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M158 350.9v-1.3h1.7V343h-7v6.4h1.8v1.4z"/>
      <path class="port port-17" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M162.2 333v1.3h-1.7v6.5h7v-6.5h-1.7V333z"/>
      <path class="port port-18" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M165.8 350.9v-1.3h1.7V343h-7v6.4h1.8v1.4z"/>
      <path class="port port-19" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M169.7 333v1.3H168v6.5h7v-6.5h-1.7V333z"/>
      <path class="port port-20" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M173.3 350.9v-1.3h1.7V343h-7v6.4h1.8v1.4z"/>
      <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M177.3 333v1.3h-1.7v6.5h7v-6.5H181V333z"/>
      <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M181 350.9v-1.3h1.7V343h-7v6.4h1.7v1.4z"/>
      <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M185.2 333v1.3h-1.8v6.5h7v-6.5h-1.7V333z"/>
      <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M188.8 350.9v-1.3h1.7V343h-7v6.4h1.7v1.4z"/>
      <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M193.3 334.3v6.8h3.5v-.8h.4v.8h3.5v-6.8h-3.5v.7h-.4v-.7z"/>
      <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M201 334.3v6.8h3.5v-.8h.4v.8h3.5v-6.8h-3.5v.7h-.4v-.7z"/>
      <path style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M78.7 343.1v6.9H82v-.9h.4v.9H86V343h-3.5v.8h-.4v-.8z"/>
      <path style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M86.3 343.1v6.9h3.5v-.9h.4v.9h3.5V343h-3.5v.8h-.4v-.8z"/>
      <path style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M78.7 334.4v6.8H82v-.9h.4v1H86v-7h-3.5v.8h-.4v-.7z"/>
      <path style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M86.3 334.4v6.8h3.5v-.9h.4v1h3.5v-7h-3.5v.8h-.4v-.7z"/>
      <path style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M69.8 343.1v1.3h-1.7v6.5h7v-6.5h-1.7v-1.3z"/>
      <path style="fill:#fdfdf1;stroke:#000;stroke-width:.48423973;" d="M58.5 343.1v1.3h-1.7v6.5h7v-6.5h-1.7v-1.3z"/>
      <rect style="opacity:1;fill:#1a1a1a;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="8.3" height="5.6" x="44.9" y="346" rx="0" ry=".5"/>
      <rect style="fill:#b3b3b3;stroke-width:.32030439" width="5.4" height="1.8" x="46.4" y="348" rx="0" ry=".2"/>
    </g>
    <circle style="opacity:1;fill:#f1f413;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" cx="33.6" cy="287.2" r=".8"/>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.11666656px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#a0a4b0;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="25.7" y="288"><tspan x="25.7" y="288" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#a0a4b0;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">PWR</tspan></text>
    <circle style="opacity:1;fill:#98b49b;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" cx="33.6" cy="284.1" r=".8"/>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.11666656px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#a0a4b0;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="25.3" y="284.9"><tspan x="25.3" y="284.9" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#a0a4b0;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">STAT</tspan></text>
    <circle style="opacity:1;fill:#06f620;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" cx="33.6" cy="281" r=".8"/>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.11666656px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#a0a4b0;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="26.3" y="281.7"><tspan x="26.3" y="281.7" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#a0a4b0;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">RUN</tspan></text>
    <rect style="opacity:1;fill:#807d7d;fill-opacity:1;stroke:#5f6169;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="21.5" height="4.3" x="4.6" y="271.2" rx="1.4" ry="1.3"/>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:3.52777767px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#fff;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="6.9" y="274.6"><tspan x="6.9" y="274.6" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#fff;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">TiFRONT</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.82222223px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#5f6169;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="8.6" y="278.6"><tspan x="8.6" y="278.6" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#101010;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">PIOLINK</tspan></text>
    <text xml:space="preserve" x="100.2" y="263" transform="scale(.9627 1.03874)"><tspan x="100.2" y="263"      style="font-weight:700;font-size:2.64px;">1</tspan></text>
    <text xml:space="preserve" x="100.2" y="281.9" transform="scale(.9627 1.03874)"><tspan x="100.2" y="281.9"  style="font-weight:700;font-size:2.64px;">2</tspan></text>
    <text xml:space="preserve" x="108.2" y="263" transform="scale(.9627 1.03874)"><tspan x="108.2" y="263"      style="font-weight:700;font-size:2.64px;">3</tspan></text>
    <text xml:space="preserve" x="108.2" y="281.9" transform="scale(.9627 1.03874)"><tspan x="108.2" y="281.9"  style="font-weight:700;font-size:2.64px;">4</tspan></text>
    <text xml:space="preserve" x="116.1" y="263" transform="scale(.9627 1.03874)"><tspan x="116.1" y="263"      style="font-weight:700;font-size:2.64px;">5</tspan></text>
    <text xml:space="preserve" x="124" y="263" transform="scale(.9627 1.03874)"><tspan x="124" y="263"          style="font-weight:700;font-size:2.64px;">7</tspan></text>
    <text xml:space="preserve" x="132" y="263" transform="scale(.9627 1.03874)"><tspan x="132" y="263"          style="font-weight:700;font-size:2.64px;">9</tspan></text>
    <text xml:space="preserve" x="138.9" y="263" transform="scale(.9627 1.03874)"><tspan x="138.9" y="263"      style="font-weight:700;font-size:2.64px;">11</tspan></text>
    <text xml:space="preserve" x="116.1" y="281.9" transform="scale(.9627 1.03874)"><tspan x="116.1" y="281.9"  style="font-weight:700;font-size:2.64px;">6</tspan></text>
    <text xml:space="preserve" x="124.1" y="281.9" transform="scale(.9627 1.03874)"><tspan x="124.1" y="281.9"  style="font-weight:700;font-size:2.64px;">8</tspan></text>
    <text xml:space="preserve" x="131" y="281.9" transform="scale(.9627 1.03874)"><tspan x="131" y="281.9"      style="font-weight:700;font-size:2.64px;">10</tspan></text>
    <text xml:space="preserve" x="138.9" y="281.9" transform="scale(.9627 1.03874)"><tspan x="138.9" y="281.9"  style="font-weight:700;font-size:2.64px;">12</tspan></text>
    <text xml:space="preserve" x="149.2" y="263" transform="scale(.9627 1.03874)"><tspan x="149.2" y="263"      style="font-weight:700;font-size:2.64px;">13</tspan></text>
    <text xml:space="preserve" x="157.1" y="263" transform="scale(.9627 1.03874)"><tspan x="157.1" y="263"      style="font-weight:700;font-size:2.64px;">15</tspan></text>
    <text xml:space="preserve" x="165.2" y="263" transform="scale(.9627 1.03874)"><tspan x="165.2" y="263"      style="font-weight:700;font-size:2.64px;">17</tspan></text>
    <text xml:space="preserve" x="173.1" y="263" transform="scale(.9627 1.03874)"><tspan x="173.1" y="263"      style="font-weight:700;font-size:2.64px;">19</tspan></text>
    <text xml:space="preserve" x="181" y="263" transform="scale(.9627 1.03874)"><tspan x="181" y="263"          style="font-weight:700;font-size:2.64px;">21</tspan></text>
    <text xml:space="preserve" x="189.1" y="263" transform="scale(.9627 1.03874)"><tspan x="189.1" y="263"      style="font-weight:700;font-size:2.64px;">23</tspan></text>
    <text xml:space="preserve" x="149.1" y="281.9" transform="scale(.9627 1.03874)"><tspan x="149.1" y="281.9"  style="font-weight:700;font-size:2.64px;">14</tspan></text>
    <text xml:space="preserve" x="157.1" y="281.9" transform="scale(.9627 1.03874)"><tspan x="157.1" y="281.9"  style="font-weight:700;font-size:2.64px;">16</tspan></text>
    <text xml:space="preserve" x="153.6" y="302.7" transform="scale(1.03405 .96707)"><tspan x="153.6" y="302.7" style="font-weight:700;font-size:2.64px;">18</tspan></text>
    <text xml:space="preserve" x="173.1" y="281.9" transform="scale(.9627 1.03874)"><tspan x="173.1" y="281.9"  style="font-weight:700;font-size:2.64px;">20</tspan></text>
    <text xml:space="preserve" x="181" y="281.9" transform="scale(.9627 1.03874)"><tspan x="181" y="281.9"      style="font-weight:700;font-size:2.64px;">22</tspan></text>
    <text xml:space="preserve" x="189.1" y="281.9" transform="scale(.9627 1.03874)"><tspan x="189.1" y="281.9"  style="font-weight:700;font-size:2.64px;">24</tspan></text>
    <text xml:space="preserve" x="199.5" y="263" transform="scale(.9627 1.03874)"><tspan x="199.5" y="263"      style="font-weight:700;font-size:2.64px;">21</tspan></text>
    <text xml:space="preserve" x="207.5" y="263" transform="scale(.9627 1.03874)"><tspan x="207.5" y="263"      style="font-weight:700;font-size:2.64px;">23</tspan></text>
    <text xml:space="preserve" x="199.5" y="281.9" transform="scale(.9627 1.03874)"><tspan x="199.5" y="281.9"  style="font-weight:700;font-size:2.64px;">22</tspan></text>
    <text xml:space="preserve" x="207.5" y="281.9" transform="scale(.9627 1.03874)"><tspan x="207.5" y="281.9"  style="font-weight:700;font-size:2.64px;">24</tspan></text>
    <rect style="display:inline;opacity:1;fill:#fd5;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="41.6" height="6.7" x="29.2" y="269.5" rx=".1" ry=".6"/>
    <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:7.48947477px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458332" x="31.3" y="271.7" transform="scale(.98845 1.01168)"><tspan x="31.3" y="271.7" style="font-size:5.64444447px;stroke-width:.26458332">3단계_보안 L2</tspan></text>
  </g>
</svg>