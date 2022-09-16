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
    <rect style="opacity:1;fill:#c4c4bc;fill-opacity:1;stroke:#09160a;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.69346732;paint-order:normal" width="228.5" height="28.5" x=".7" y="268.1" ry="1" rx="1.2"/>
    <path style="fill:#fff;fill-opacity:.55686275;stroke:none;stroke-width:.26499999;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:.99344261;paint-order:stroke fill markers" d="M2.3 269.1h24v6.1h-24z"/>
    <text xml:space="preserve" style="font-family:'Headline R';text-align:end;writing-mode:lr-tb;text-anchor:end;" x="225" y="278.5"><tspan x="225" y="278.5"       style="font-weight:700;font-family:'고딕체';fill:#2f52b6;stroke:#2f52b6;stroke-width:.4;font-size:7.05px">무선집선</tspan></text>
    <text xml:space="preserve" style="font-family:'Headline R';text-align:end;writing-mode:lr-tb;text-anchor:end;" x="224.9" y="288.1"><tspan x="224.9" y="288.1"   style="font-weight:700;font-family:'고딕체';fill:#2f52b6;stroke:#2f52b6;stroke-width:.4;font-size:7.05px">스위치</tspan></text>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;stroke-linecap:round;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="154.1" cy="279.7" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;stroke-linecap:round;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="154.1" cy="282" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;stroke-linecap:round;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="154.1" cy="284.6" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;stroke-linecap:round;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="154.1" cy="287" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;stroke-linecap:round;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="151.8" cy="279.7" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;stroke-linecap:round;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="151.8" cy="282" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;stroke-linecap:round;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="151.8" cy="284.6" rx=".6" ry=".7"/>
    <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1;stroke-linecap:round;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="151.8" cy="287" rx=".6" ry=".7"/>
    <rect style="opacity:1;fill:none;fill-opacity:1;stroke:#09160a;stroke-width:.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.69346732;paint-order:normal" width="46" height="13.5" x="148.1" y="275.4" rx=".8" ry=".5"/>
    <text xml:space="preserve" x="53.1" y="264.1" transform="scale(.9627 1.03874)">  <tspan x="53.1" y="264.1"  style="font-weight:700;font-size:2.6px;">1</tspan></text>
    <text xml:space="preserve" x="61.1" y="264.1" transform="scale(.9627 1.03874)">  <tspan x="61.1" y="264.1"  style="font-weight:700;font-size:2.6px;">3</tspan></text>
    <text xml:space="preserve" x="68.8" y="264.1" transform="scale(.9627 1.03874)">  <tspan x="68.8" y="264.1"  style="font-weight:700;font-size:2.6px;">5</tspan></text>
    <text xml:space="preserve" x="76.7" y="264.1" transform="scale(.9627 1.03874)">  <tspan x="76.7" y="264.1"  style="font-weight:700;font-size:2.6px;">7</tspan></text>
    <text xml:space="preserve" x="88.3" y="264.1" transform="scale(.9627 1.03874)">  <tspan x="88.3" y="264.1"  style="font-weight:700;font-size:2.6px;">9</tspan></text>
    <text xml:space="preserve" x="95.3" y="264.1" transform="scale(.9627 1.03874)">  <tspan x="95.3" y="264.1"  style="font-weight:700;font-size:2.6px;">11</tspan></text>
    <text xml:space="preserve" x="102.9" y="264.1" transform="scale(.9627 1.03874)"> <tspan x="102.9" y="264.1" style="font-weight:700;font-size:2.6px;">13</tspan></text>
    <text xml:space="preserve" x="110.9" y="264.1" transform="scale(.9627 1.03874)"> <tspan x="110.9" y="264.1" style="font-weight:700;font-size:2.6px;">15</tspan></text>
    <text xml:space="preserve" x="122.5" y="264.1" transform="scale(.9627 1.03874)"> <tspan x="122.5" y="264.1" style="font-weight:700;font-size:2.6px;">17</tspan></text>
    <text xml:space="preserve" x="130.4" y="264.1" transform="scale(.9627 1.03874)"> <tspan x="130.4" y="264.1" style="font-weight:700;font-size:2.6px;">19</tspan></text>
    <text xml:space="preserve" x="138.2" y="264.1" transform="scale(.9627 1.03874)"> <tspan x="138.2" y="264.1" style="font-weight:700;font-size:2.6px;">21</tspan></text>
    <text xml:space="preserve" x="146.1" y="264.1" transform="scale(.9627 1.03874)"> <tspan x="146.1" y="264.1" style="font-weight:700;font-size:2.6px;">23</tspan></text>
    <text xml:space="preserve" x="165" y="264.1" transform="scale(.9627 1.03874)">   <tspan x="165" y="264.1"   style="font-weight:700;font-size:2.6px;">UP1</tspan></text>
    <text xml:space="preserve" x="172.9" y="264.1" transform="scale(.9627 1.03874)"> <tspan x="172.9" y="264.1" style="font-weight:700;font-size:2.6px;">UP3</tspan></text>
    <text xml:space="preserve" x="53.1" y="281.1" transform="scale(.9627 1.03874)">  <tspan x="53.1" y="281.1"  style="font-weight:700;font-size:2.6px;">2</tspan></text>
    <text xml:space="preserve" x="61.1" y="281" transform="scale(.9627 1.03874)">    <tspan x="61.1" y="281"    style="font-weight:700;font-size:2.6px;">4</tspan></text>
    <text xml:space="preserve" x="68.8" y="281" transform="scale(.9627 1.03874)">    <tspan x="68.8" y="281"    style="font-weight:700;font-size:2.6px;">6</tspan></text>
    <text xml:space="preserve" x="76.8" y="281.1" transform="scale(.9627 1.03874)">  <tspan x="76.8" y="281.1"  style="font-weight:700;font-size:2.6px;">8</tspan></text>
    <text xml:space="preserve" x="87.2" y="281.1" transform="scale(.9627 1.03874)">  <tspan x="87.2" y="281.1"  style="font-weight:700;font-size:2.6px;">10</tspan></text>
    <text xml:space="preserve" x="95.2" y="281.1" transform="scale(.9627 1.03874)">  <tspan x="95.2" y="281.1"  style="font-weight:700;font-size:2.6px;">12</tspan></text>
    <text xml:space="preserve" x="102.8" y="281.1" transform="scale(.9627 1.03874)"> <tspan x="102.8" y="281.1" style="font-weight:700;font-size:2.6px;">14</tspan></text>
    <text xml:space="preserve" x="110.8" y="281" transform="scale(.9627 1.03874)">   <tspan x="110.8" y="281"   style="font-weight:700;font-size:2.6px;">16</tspan></text>
    <text xml:space="preserve" x="113.8" y="301.8" transform="scale(1.03405 .96707)"><tspan x="113.8" y="301.8" style="font-weight:700;font-size:2.6px;">18</tspan></text>
    <text xml:space="preserve" x="130.5" y="281.1" transform="scale(.9627 1.03874)"> <tspan x="130.5" y="281.1" style="font-weight:700;font-size:2.6px;">20</tspan></text>
    <text xml:space="preserve" x="138.1" y="281.1" transform="scale(.9627 1.03874)"> <tspan x="138.1" y="281.1" style="font-weight:700;font-size:2.6px;">22</tspan></text>
    <text xml:space="preserve" x="146.1" y="281.1" transform="scale(.9627 1.03874)"> <tspan x="146.1" y="281.1" style="font-weight:700;font-size:2.6px;">24</tspan></text>
    <text xml:space="preserve" x="164.9" y="281.1" transform="scale(.9627 1.03874)"> <tspan x="164.9" y="281.1" style="font-weight:700;font-size:2.6px;">UP2</tspan></text>
    <text xml:space="preserve" x="172.8" y="281" transform="scale(.9627 1.03874)">   <tspan x="172.8" y="281"   style="font-weight:700;font-size:2.6px;">UP4</tspan></text>
    <text xml:space="preserve" x="184.8" y="264.1" transform="scale(.9627 1.03874)"> <tspan x="184.8" y="264.1" style="font-weight:700;font-size:2.6px;">UP1</tspan></text>
    <text xml:space="preserve" x="192.9" y="264.1" transform="scale(.9627 1.03874)"> <tspan x="192.9" y="264.1" style="font-weight:700;font-size:2.6px;">UP3</tspan></text>
    <text xml:space="preserve" x="184.7" y="281.1" transform="scale(.9627 1.03874)"> <tspan x="184.7" y="281.1" style="font-weight:700;font-size:2.6px;">UP2</tspan></text>
    <text xml:space="preserve" x="192.9" y="281" transform="scale(.9627 1.03874)">   <tspan x="192.9" y="281"   style="font-weight:700;font-size:2.6px;">UP4</tspan></text>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="38.6" cy="279.4" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="38.6" cy="281.8" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="38.6" cy="284.3" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="38.6" cy="286.7" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="36.8" cy="279.4" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="36.8" cy="281.8" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="36.8" cy="284.3" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="36.8" cy="286.7" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="42.4" cy="279.4" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="42.4" cy="281.8" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="42.4" cy="284.3" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="42.4" cy="286.7" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="40.7" cy="279.4" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="40.7" cy="281.8" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="40.7" cy="284.3" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="40.7" cy="286.7" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="46.3" cy="279.4" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="46.3" cy="281.8" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="46.3" cy="284.3" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="46.3" cy="286.7" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="44.6" cy="279.4" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="44.6" cy="281.8" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="44.6" cy="284.3" rx=".6" ry=".7"/>
    <ellipse style="fill:#28bf27;stroke:#09160a;stroke-width:.1;stroke-miterlimit:6.6;stroke-opacity:.7;" cx="44.6" cy="286.7" rx=".6" ry=".7"/>
    <path class="port port-02" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M48.4 282.8v4.6h3.5v-.5h.4v.5h3.4v-4.6h-3.4v.5h-.4v-.5z"/>
    <path class="port port-26" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M177 282.8v4.6h3.5v-.5h.4v.5h3.5v-4.6H181v.5h-.4v-.5z"/>
    <path class="port port-04" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M56 282.8v4.6h3.5v-.5h.5v.5h3.4v-4.6H60v.5h-.5v-.5z"/>
    <path class="port port-28" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M185 282.8v4.6h3.4v-.5h.4v.5h3.5v-4.6h-3.5v.5h-.4v-.5z"/>
    <path class="port port-01" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M48.4 276.8v4.7h3.5v-.6h.4v.6h3.4v-4.7h-3.4v.5h-.4v-.5z"/>
    <path class="port port-25" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M177 276.8v4.7h3.5v-.6h.4v.6h3.5v-4.7H181v.5h-.4v-.5z"/>
    <path class="port port-03" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M56 276.8v4.7h3.5v-.6h.5v.6h3.4v-4.7H60v.5h-.5v-.5z"/>
    <path class="port port-27" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M185 276.8v4.7h3.4v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-06" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M63.4 282.8v4.6H67v-.5h.4v.5h3.5v-4.6h-3.5v.5H67v-.5z"/>
    <path class="port port-08" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M71.1 282.8v4.6h3.5v-.5h.4v.5h3.5v-4.6H75v.5h-.4v-.5z"/>
    <path class="port port-05" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M63.4 276.8v4.7H67v-.6h.4v.6h3.5v-4.7h-3.5v.5H67v-.5z"/>
    <path class="port port-07" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M71.1 276.8v4.7h3.5v-.6h.4v.6h3.5v-4.7H75v.5h-.4v-.5z"/>
    <path class="port port-10" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M82.2 282.8v4.6h3.5v-.5h.4v.5h3.5v-4.6H86v.5h-.4v-.5z"/>
    <path class="port port-12" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M89.9 282.8v4.6h3.5v-.5h.4v.5h3.4v-4.6h-3.4v.5h-.4v-.5z"/>
    <path class="port port-09" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M82.2 276.8v4.7h3.5v-.6h.4v.6h3.5v-4.7H86v.5h-.4v-.5z"/>
    <path class="port port-11" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M89.9 276.8v4.7h3.5v-.6h.4v.6h3.4v-4.7h-3.4v.5h-.4v-.5z"/>
    <path class="port port-14" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M97.2 282.8v4.6h3.5v-.5h.4v.5h3.5v-4.6h-3.5v.5h-.4v-.5z"/>
    <path class="port port-16" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M105 282.8v4.6h3.4v-.5h.4v.5h3.5v-4.6h-3.5v.5h-.4v-.5z"/>
    <path class="port port-13" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M97.2 276.8v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-15" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M105 276.8v4.7h3.4v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-18" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M116.1 282.7v4.7h3.5v-.6h.4v.6h3.5v-4.7H120v.5h-.4v-.5z"/>
    <path class="port port-20" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M123.8 282.7v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-17" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M116.1 276.7v4.7h3.5v-.6h.4v.6h3.5v-4.7H120v.5h-.4v-.5z"/>
    <path class="port port-19" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M123.8 276.7v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M131.2 282.7v4.7h3.4v-.6h.4v.6h3.5v-4.7H135v.5h-.4v-.5z"/>
    <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M138.8 282.7v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M131.2 276.7v4.7h3.4v-.6h.4v.6h3.5v-4.7H135v.5h-.4v-.5z"/>
    <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M138.8 276.7v4.7h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
    <path class="port port-25" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M159.9 276.1v1H158v4.4h7V277h-1.7v-1z"/>
    <path class="port port-26" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M163.5 287.8v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
    <path class="port port-27" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M167.5 276.1v1h-1.7v4.4h7V277h-1.7v-1z"/>
    <path class="port port-28" style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M171.1 287.8v-.9h1.7v-4.4h-7v4.4h1.8v1z"/>
    <path style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M28.9 276.6v.9H27v4.4h7v-4.4h-1.7v-1Z"/>
    <path style="fill:#fdfdf1;stroke:#000;stroke-width:.4;" d="M32.5 288.3v-1h1.7V283h-7v4.3h1.7v1z"/>
    <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:5.14090538px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458329" x="3.2" y="259.9" transform="scale(.94892 1.05383)"><tspan x="3.2" y="259.9" style="stroke-width:.26458329"><tspan style="fill:#00f;stroke-width:.26458329">ubi</tspan><tspan style="fill:red;stroke-width:.26458329">Q</tspan><tspan style="fill:#00f;stroke-width:.26458329">uoss</tspan></tspan></text>
  </g>
</svg>