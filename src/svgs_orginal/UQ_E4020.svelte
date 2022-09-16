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
    <rect style="opacity:1;fill:#c4c4bc;stroke:#09160a;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:.69;paint-order:normal" width="228.5" height="28.5" x=".7" y="268.1" ry="1" rx="1.2"/>
    <path style="fill:#fff;fill-opacity:.55;stroke:none;" d="M2.3 269.1h24v6.1h-24z"/>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:8.46666622px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:end;writing-mode:lr-tb;text-anchor:end;opacity:1;fill:#2c4cc8;fill-opacity:1;stroke:#2c4cc8;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="225" y="278.5"><tspan x="225" y="278.5" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:7.05555534px;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';fill:#2f52b6;fill-opacity:1;stroke:#2f52b6;stroke-width:.40000001;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">무선POE</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:8.46666622px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:end;writing-mode:lr-tb;text-anchor:end;opacity:1;fill:#2c4cc8;fill-opacity:1;stroke:#2c4cc8;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="224.9" y="288.1"><tspan x="224.9" y="288.1" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';fill:#2f52b6;fill-opacity:1;stroke:#2f52b6;stroke-width:.40000001;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1;font-size:7.05555556px">스위치</tspan></text>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;" cx="163.1" cy="279.7" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;" cx="163.1" cy="282" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;" cx="163.1" cy="284.6" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;" cx="163.1" cy="287" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;" cx="160.8" cy="279.7" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;" cx="160.8" cy="282" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;" cx="160.8" cy="284.6" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;" cx="160.8" cy="287" rx=".6" ry=".7"/>
    <rect style="opacity:1;fill:none;fill-opacity:1;stroke:#09160a;stroke-width:.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.69346732;paint-order:normal" width="28.2" height="13.5" x="157" y="275.4" rx=".5" ry=".5"/>
    <text xml:space="preserve" style="font-weight:700;font-size:2.64px;line-height:1.25;font-family:'고딕체';fill:#000;" x="174.3" y="264.1" transform="scale(.9627 1.03874)"><tspan x="174.3" y="264.1" style="font-weight:700;font-size:2.64px;stroke-width:.066">UP1</tspan></text>
    <text xml:space="preserve" style="font-weight:700;font-size:2.64px;line-height:1.25;font-family:'고딕체';fill:#000;" x="182.2" y="264.1" transform="scale(.9627 1.03874)"><tspan x="182.2" y="264.1" style="font-weight:700;font-size:2.64px;stroke-width:.066">UP3</tspan></text>
    <text xml:space="preserve" style="font-weight:700;font-size:2.64px;line-height:1.25;font-family:'고딕체';fill:#000;" x="174.2" y="281.1" transform="scale(.9627 1.03874)"><tspan x="174.2" y="281.1" style="font-weight:700;font-size:2.64px;stroke-width:.066">UP2</tspan></text>
    <text xml:space="preserve" style="font-weight:700;font-size:2.64px;line-height:1.25;font-family:'고딕체';fill:#000;" x="182.2" y="281" transform="scale(.9627 1.03874)">  <tspan x="182.2" y="281"   style="font-weight:700;font-size:2.64px;stroke-width:.066">UP4</tspan></text>

    <path style="opacity:1;fill:#fdfdf1;fill-opacity:.96649487;stroke:#000;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.97938143;paint-order:normal" d="M32.5 288.3v-1h1.7V283h-7v4.3h1.7v1z"/>
    <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:5.14090538px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458329" x="3.2" y="259.9" transform="scale(.94892 1.05383)"><tspan x="3.2" y="259.9" style="stroke-width:.26458329"><tspan style="fill:#00f;stroke-width:.26458329">ubi</tspan><tspan style="fill:red;stroke-width:.26458329">Q</tspan><tspan style="fill:#00f;stroke-width:.26458329">uoss</tspan></tspan></text>
    <path class="port port-01" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M40.2 276.1v1h-1.7v4.3h7V277h-1.8v-.9z"    />
    <path class="port port-02" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M43.8 288.3v-.9h1.7V283h-7v4.4h1.7v1z"     />
    <path class="port port-03" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M47.8 276.1v1h-1.7v4.3h7V277h-1.7v-.9z"    />
    <path class="port port-04" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M51.4 288.3v-.9h1.7V283h-7v4.4h1.8v1z"     />
    <path class="port port-05" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M55.5 276.1v1h-1.7v4.3h7V277H59v-.9z"      />
    <path class="port port-06" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M59 288.3v-.9h1.8V283h-7v4.4h1.7v1z"       />
    <path class="port port-07" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M63.1 276.1v1h-1.7v4.3h7V277h-1.7v-.9z"    />
    <path class="port port-08" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M66.7 288.3v-.9h1.7V283h-7v4.4h1.8v1z"     />
    <path class="port port-09" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M72.3 276.1v1h-1.7v4.3h7V277H76v-.9z"      />
    <path class="port port-10" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M76 288.3v-.9h1.7V283h-7v4.4h1.7v1z"       />
    <path class="port port-11" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M80 276.1v1h-1.7v4.3h7V277h-1.8v-.9z"      />
    <path class="port port-12" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M83.6 288.3v-.9h1.7V283h-7v4.4H80v1z"      />
    <path class="port port-13" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M88.3 276.1v1h-1.7v4.3h7V277h-1.8v-.9z"    />
    <path class="port port-14" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M91.9 288.3v-.9h1.7V283h-7v4.4h1.7v1z"     />
    <path class="port port-15" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M96 276.1v1h-1.8v4.3h7V277h-1.7v-.9z"      />
    <path class="port port-16" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M99.5 288.3v-.9h1.7V283h-7v4.4H96v1z"      />
    <path class="port port-17" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M105.3 276.1v1h-1.7v4.3h7V277h-1.8v-.9z"   />
    <path class="port port-18" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M108.9 288.3v-.9h1.7V283h-7v4.4h1.7v1z"    />
    <path class="port port-19" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M112.8 276.1v1H111v4.3h7V277h-1.8v-.9z"    />
    <path class="port port-20" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M116.4 288.3v-.9h1.7V283h-7v4.4h1.7v1z"    />
    <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M120.4 276.1v1h-1.7v4.3h7V277H124v-.9z"    />
    <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M124 288.3v-.9h1.8V283h-7v4.4h1.7v1z"      />
    <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M128.2 276.1v1h-1.7v4.3h7V277h-1.7v-.9z"   />
    <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M131.8 288.3v-.9h1.8V283h-7v4.4h1.7v1z"    />
    <path class="port port-26" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M166.4 282.8v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-28" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M174.3 282.8v4.7h3.4v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-25" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M166.4 276.8v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-27" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M174.3 276.8v4.7h3.4v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <text xml:space="preserve" x="42.6" y="263.3" transform="scale(.9627 1.03874)"><tspan x="42.6" y="263.3"    style="font-weight:700;font-size:2.65px;">1</tspan></text>
    <text xml:space="preserve" x="42.6" y="282.2" transform="scale(.9627 1.03874)"><tspan x="42.6" y="282.2"    style="font-weight:700;font-size:2.65px;">2</tspan></text>
    <text xml:space="preserve" x="50.6" y="263.3" transform="scale(.9627 1.03874)"><tspan x="50.6" y="263.3"    style="font-weight:700;font-size:2.65px;">3</tspan></text>
    <text xml:space="preserve" x="50.6" y="282.2" transform="scale(.9627 1.03874)"><tspan x="50.6" y="282.2"    style="font-weight:700;font-size:2.65px;">4</tspan></text>
    <text xml:space="preserve" x="58.5" y="263.3" transform="scale(.9627 1.03874)"><tspan x="58.5" y="263.3"    style="font-weight:700;font-size:2.65px;">5</tspan></text>
    <text xml:space="preserve" x="66.5" y="263.3" transform="scale(.9627 1.03874)"><tspan x="66.5" y="263.3"    style="font-weight:700;font-size:2.65px;">7</tspan></text>
    <text xml:space="preserve" x="76.1" y="263.3" transform="scale(.9627 1.03874)"><tspan x="76.1" y="263.3"    style="font-weight:700;font-size:2.65px;">9</tspan></text>
    <text xml:space="preserve" x="83" y="263.3" transform="scale(.9627 1.03874)"><tspan x="83" y="263.3"        style="font-weight:700;font-size:2.65px;">11</tspan></text>
    <text xml:space="preserve" x="58.5" y="282.2" transform="scale(.9627 1.03874)"><tspan x="58.5" y="282.2"    style="font-weight:700;font-size:2.65px;">6</tspan></text>
    <text xml:space="preserve" x="66.5" y="282.2" transform="scale(.9627 1.03874)"><tspan x="66.5" y="282.2"    style="font-weight:700;font-size:2.65px;">8</tspan></text>
    <text xml:space="preserve" x="75" y="282.2" transform="scale(.9627 1.03874)"><tspan x="75" y="282.2"        style="font-weight:700;font-size:2.65px;">10</tspan></text>
    <text xml:space="preserve" x="83" y="282.2" transform="scale(.9627 1.03874)"><tspan x="83" y="282.2"        style="font-weight:700;font-size:2.65px;">12</tspan></text>
    <text xml:space="preserve" x="91.6" y="263.3" transform="scale(.9627 1.03874)"><tspan x="91.6" y="263.3"    style="font-weight:700;font-size:2.65px;">13</tspan></text>
    <text xml:space="preserve" x="99.5" y="263.3" transform="scale(.9627 1.03874)"><tspan x="99.5" y="263.3"    style="font-weight:700;font-size:2.65px;">15</tspan></text>
    <text xml:space="preserve" x="109.3" y="263.3" transform="scale(.9627 1.03874)"><tspan x="109.3" y="263.3"  style="font-weight:700;font-size:2.65px;">17</tspan></text>
    <text xml:space="preserve" x="117.1" y="263.3" transform="scale(.9627 1.03874)"><tspan x="117.1" y="263.3"  style="font-weight:700;font-size:2.65px;">19</tspan></text>
    <text xml:space="preserve" x="125.1" y="263.3" transform="scale(.9627 1.03874)"><tspan x="125.1" y="263.3"  style="font-weight:700;font-size:2.65px;">21</tspan></text>
    <text xml:space="preserve" x="133.2" y="263.3" transform="scale(.9627 1.03874)"><tspan x="133.2" y="263.3"  style="font-weight:700;font-size:2.65px;">23</tspan></text>
    <text xml:space="preserve" x="91.6" y="282.2" transform="scale(.9627 1.03874)"><tspan x="91.6" y="282.2"    style="font-weight:700;font-size:2.65px;">14</tspan></text>
    <text xml:space="preserve" x="99.5" y="282.2" transform="scale(.9627 1.03874)"><tspan x="99.5" y="282.2"    style="font-weight:700;font-size:2.65px;">16</tspan></text>
    <text xml:space="preserve" x="101.6" y="303" transform="scale(1.03405 .96707)"><tspan x="101.6" y="303"     style="font-weight:700;font-size:2.65px;">18</tspan></text>
    <text xml:space="preserve" x="117.2" y="282.2" transform="scale(.9627 1.03874)"><tspan x="117.2" y="282.2"  style="font-weight:700;font-size:2.65px;">20</tspan></text>
    <text xml:space="preserve" x="125" y="282.2" transform="scale(.9627 1.03874)"><tspan x="125" y="282.2"      style="font-weight:700;font-size:2.65px;">22</tspan></text>
    <text xml:space="preserve" x="133.1" y="282.2" transform="scale(.9627 1.03874)"><tspan x="133.1" y="282.2"  style="font-weight:700;font-size:2.65px;">24</tspan></text>
  </g>
</svg>