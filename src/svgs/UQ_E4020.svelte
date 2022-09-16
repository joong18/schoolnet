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
  <rect style="opacity:1;fill:#c4c4bc;stroke:#09160a;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:.68999999;paint-order:normal" width="228.5" height="28.5" x=".7" y=".6" ry="1" rx="1.2"/>
  <path style="fill:#fff;fill-opacity:.55;stroke:none" d="M2.3 1.6h24v6.1h-24z"/>
  <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:8.46666622px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:end;writing-mode:lr-tb;text-anchor:end;opacity:1;fill:#2c4cc8;fill-opacity:1;stroke:#2c4cc8;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="225" y="11"><tspan x="225" y="11" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:7.05555534px;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';fill:#2f52b6;fill-opacity:1;stroke:#2f52b6;stroke-width:.40000001;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">무선POE</tspan></text>
  <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:8.46666622px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:end;writing-mode:lr-tb;text-anchor:end;opacity:1;fill:#2c4cc8;fill-opacity:1;stroke:#2c4cc8;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" x="224.9" y="20.6"><tspan x="224.9" y="20.6" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:7.05555534px;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';fill:#2f52b6;fill-opacity:1;stroke:#2f52b6;stroke-width:.40000001;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1">스위치</tspan></text>
  <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1" cx="163.1" cy="12.2" rx=".6" ry=".7"/>
  <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1" cx="163.1" cy="14.5" rx=".6" ry=".7"/>
  <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1" cx="163.1" cy="17.1" rx=".6" ry=".7"/>
  <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1" cx="163.1" cy="19.5" rx=".6" ry=".7"/>
  <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1" cx="160.8" cy="12.2" rx=".6" ry=".7"/>
  <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1" cx="160.8" cy="14.5" rx=".6" ry=".7"/>
  <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1" cx="160.8" cy="17.1" rx=".6" ry=".7"/>
  <ellipse style="fill:#23b522;stroke:#09160a;stroke-width:.1" cx="160.8" cy="19.5" rx=".6" ry=".7"/>
  <rect style="opacity:1;fill:none;fill-opacity:1;stroke:#09160a;stroke-width:.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.69346732;paint-order:normal" width="28.2" height="13.5" x="157" y="7.9" rx=".5" ry=".5"/>
  <text xml:space="preserve" style="font-weight:700;font-size:2.63999343px;line-height:1.25;font-family:'고딕체';fill:#000;stroke-width:.9999975" x="174.3" y="6.576" transform="scale(.9627 1.03874)"><tspan x="174.3" y="6.576" style="font-weight:700;font-size:2.63999343px;stroke-width:.06599984">UP1</tspan></text>
  <text xml:space="preserve" style="font-weight:700;font-size:2.63999343px;line-height:1.25;font-family:'고딕체';fill:#000;stroke-width:.9999975" x="182.2" y="6.576" transform="scale(.9627 1.03874)"><tspan x="182.2" y="6.576" style="font-weight:700;font-size:2.63999343px;stroke-width:.06599984">UP3</tspan></text>
  <text xml:space="preserve" style="font-weight:700;font-size:2.63999343px;line-height:1.25;font-family:'고딕체';fill:#000;stroke-width:.9999975" x="174.2" y="23.576" transform="scale(.9627 1.03874)"><tspan x="174.2" y="23.576" style="font-weight:700;font-size:2.63999343px;stroke-width:.06599984">UP2</tspan></text>
  <text xml:space="preserve" style="font-weight:700;font-size:2.63999343px;line-height:1.25;font-family:'고딕체';fill:#000;stroke-width:.9999975" x="182.2" y="23.476" transform="scale(.9627 1.03874)">  <tspan x="182.2" y="23.476" style="font-weight:700;font-size:2.63999343px;stroke-width:.06599984">UP4</tspan></text>
  <path style="opacity:1;fill:#fdfdf1;fill-opacity:.96649487;stroke:#000;stroke-width:.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.97938143;paint-order:normal" d="M32.5 20.8v-1h1.7v-4.3h-7v4.3h1.7v1z"/>
  <text xml:space="preserve" style="font-style:normal;font-weight:400;font-size:5.14090538px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458329" x="3.2" y="6.064" transform="scale(.94892 1.05383)"><tspan x="3.2" y="6.064" style="stroke-width:.26458329"><tspan style="fill:#00f;stroke-width:.26458329">ubi</tspan><tspan style="fill:red;stroke-width:.26458329">Q</tspan><tspan style="fill:#00f;stroke-width:.26458329">uoss</tspan></tspan></text>
  <path class="port port-01" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M40.2 8.6v1h-1.7v4.3h7V9.5h-1.8v-.9Z"/>
  <path class="port port-02" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M43.8 20.8v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
  <path class="port port-03" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M47.8 8.6v1h-1.7v4.3h7V9.5h-1.7v-.9Z"/>
  <path class="port port-04" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M51.4 20.8v-.9h1.7v-4.4h-7v4.4h1.8v1z"/>
  <path class="port port-05" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M55.5 8.6v1h-1.7v4.3h7V9.5H59v-.9Z"/>
  <path class="port port-06" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M59 20.8v-.9h1.8v-4.4h-7v4.4h1.7v1z"/>
  <path class="port port-07" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M63.1 8.6v1h-1.7v4.3h7V9.5h-1.7v-.9Z"/>
  <path class="port port-08" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M66.7 20.8v-.9h1.7v-4.4h-7v4.4h1.8v1z"/>
  <path class="port port-09" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M72.3 8.6v1h-1.7v4.3h7V9.5H76v-.9Z"/>
  <path class="port port-10" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M76 20.8v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
  <path class="port port-11" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M80 8.6v1h-1.7v4.3h7V9.5h-1.8v-.9Z"/>
  <path class="port port-12" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M83.6 20.8v-.9h1.7v-4.4h-7v4.4H80v1z"/>
  <path class="port port-13" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M88.3 8.6v1h-1.7v4.3h7V9.5h-1.8v-.9Z"/>
  <path class="port port-14" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M91.9 20.8v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
  <path class="port port-15" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M96 8.6v1h-1.8v4.3h7V9.5h-1.7v-.9Z"/>
  <path class="port port-16" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M99.5 20.8v-.9h1.7v-4.4h-7v4.4H96v1z"/>
  <path class="port port-17" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M105.3 8.6v1h-1.7v4.3h7V9.5h-1.8v-.9Z"/>
  <path class="port port-18" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M108.9 20.8v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
  <path class="port port-19" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M112.8 8.6v1H111v4.3h7V9.5h-1.8v-.9Z"/>
  <path class="port port-20" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M116.4 20.8v-.9h1.7v-4.4h-7v4.4h1.7v1z"/>
  <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M120.4 8.6v1h-1.7v4.3h7V9.5H124v-.9Z"/>
  <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M124 20.8v-.9h1.8v-4.4h-7v4.4h1.7v1z"/>
  <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M128.2 8.6v1h-1.7v4.3h7V9.5h-1.7v-.9Z"/>
  <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M131.8 20.8v-.9h1.8v-4.4h-7v4.4h1.7v1z"/>
  <path class="port port-26" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M166.4 15.3V20h3.5v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
  <path class="port port-28" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M174.3 15.3V20h3.4v-.6h.4v.6h3.5v-4.7h-3.5v.5h-.4v-.5z"/>
  <path class="port port-25" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M166.4 9.3V14h3.5v-.6h.4v.6h3.5V9.3h-3.5v.5h-.4v-.5Z"/>
  <path class="port port-27" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000001" d="M174.3 9.3V14h3.4v-.6h.4v.6h3.5V9.3h-3.5v.5h-.4v-.5Z"/>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="42.6" y="5.776" transform="scale(.9627 1.03874)"><tspan x="42.6" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">1</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="42.6" y="24.676" transform="scale(.9627 1.03874)"><tspan x="42.6" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">2</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="50.6" y="5.776" transform="scale(.9627 1.03874)"><tspan x="50.6" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">3</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="50.6" y="24.676" transform="scale(.9627 1.03874)"><tspan x="50.6" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">4</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="58.5" y="5.776" transform="scale(.9627 1.03874)"><tspan x="58.5" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">5</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="66.5" y="5.776" transform="scale(.9627 1.03874)"><tspan x="66.5" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">7</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="76.1" y="5.776" transform="scale(.9627 1.03874)"><tspan x="76.1" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">9</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="83" y="5.776" transform="scale(.9627 1.03874)"><tspan x="83" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">11</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="58.5" y="24.676" transform="scale(.9627 1.03874)"><tspan x="58.5" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">6</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="66.5" y="24.676" transform="scale(.9627 1.03874)"><tspan x="66.5" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">8</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="75" y="24.676" transform="scale(.9627 1.03874)"><tspan x="75" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">10</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="83" y="24.676" transform="scale(.9627 1.03874)"><tspan x="83" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">12</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="91.6" y="5.776" transform="scale(.9627 1.03874)"><tspan x="91.6" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">13</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="99.5" y="5.776" transform="scale(.9627 1.03874)"><tspan x="99.5" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">15</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="109.3" y="5.776" transform="scale(.9627 1.03874)"><tspan x="109.3" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">17</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="117.1" y="5.776" transform="scale(.9627 1.03874)"><tspan x="117.1" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">19</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="125.1" y="5.776" transform="scale(.9627 1.03874)"><tspan x="125.1" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">21</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="133.2" y="5.776" transform="scale(.9627 1.03874)"><tspan x="133.2" y="5.776" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">23</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="91.6" y="24.676" transform="scale(.9627 1.03874)"><tspan x="91.6" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">14</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="99.5" y="24.676" transform="scale(.9627 1.03874)"><tspan x="99.5" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">16</tspan></text>
  <text xml:space="preserve" x="101.6" y="26.391" transform="scale(1.03405 .96707)"><tspan x="101.6" y="26.391" style="font-weight:700;font-size:2.6500001px">18</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="117.2" y="24.676" transform="scale(.9627 1.03874)"><tspan x="117.2" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">20</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="125" y="24.676" transform="scale(.9627 1.03874)"><tspan x="125" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">22</tspan></text>
  <text style="font-size:11.99997044px;stroke-width:.9999975" xml:space="preserve" x="133.1" y="24.676" transform="scale(.9627 1.03874)"><tspan x="133.1" y="24.676" style="font-weight:700;font-size:2.64999342px;stroke-width:.9999975">24</tspan></text>
</svg>