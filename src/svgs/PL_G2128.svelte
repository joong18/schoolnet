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
  <rect rx="1.2" ry="1" y=".5" x=".6" height="28.5" width="228.5" style="opacity:1;fill:#d9dde8;fill-opacity:1;stroke:#09160a;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:.69346732;paint-order:normal"/>
  <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M190.3 15.1V20h3.5v-.7h.4v.7h3.5V15h-3.5v.6h-.4V15Z"/>
  <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M198 15.1V20h3.5v-.7h.4v.7h3.5V15h-3.5v.6h-.4V15Z"/>
  <path class="port port-01" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M95.7 8.3v1H94v4.3h7V9.2h-1.8v-.9Z"/>
  <path class="port port-02" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M99.3 20.5v-.9h1.7v-4.5h-7v4.4h1.7v1z"/>
  <path class="port port-03" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M103.3 8.3v1h-1.7v4.3h7V9.2H107v-.9Z"/>
  <path class="port port-04" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M107 20.5v-.9h1.6v-4.5h-7v4.4h1.8v1z"/>
  <path class="port port-05" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M111 8.3v1h-1.7v4.3h7V9.2h-1.8v-.9Z"/>
  <path class="port port-06" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M114.6 20.5v-.9h1.7v-4.5h-7v4.4h1.7v1z"/>
  <path class="port port-07" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M118.6 8.3v1H117v4.3h7V9.2h-1.7v-.9Z"/>
  <path class="port port-08" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M122.2 20.5v-.9h1.7v-4.5h-7v4.4h1.8v1z"/>
  <path class="port port-09" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M126.3 8.3v1h-1.8v4.3h7V9.2h-1.7v-.9Z"/>
  <path class="port port-10" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M129.9 20.5v-.9h1.7v-4.5h-7v4.4h1.7v1z"/>
  <path class="port port-11" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M133.9 8.3v1h-1.7v4.3h7V9.2h-1.8v-.9Z"/>
  <path class="port port-12" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M137.5 20.5v-.9h1.7v-4.5h-7v4.4h1.8v1z"/>
  <path class="port port-13" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M143.8 8.3v1H142v4.3h7V9.2h-1.8v-.9Z"/>
  <path class="port port-14" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M147.4 20.5v-.9h1.7v-4.5h-7v4.4h1.7v1z"/>
  <path class="port port-15" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M151.4 8.3v1h-1.7v4.3h7V9.2H155v-.9Z"/>
  <path class="port port-16" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M155 20.5v-.9h1.7v-4.5h-7v4.4h1.8v1z"/>
  <path class="port port-17" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M159.2 8.3v1h-1.7v4.3h7V9.2h-1.7v-.9Z"/>
  <path class="port port-18" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M162.8 20.5v-.9h1.7v-4.5h-7v4.4h1.8v1z"/>
  <path class="port port-19" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M166.7 8.3v1H165v4.3h7V9.2h-1.7v-.9Z"/>
  <path class="port port-20" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M170.3 20.5v-.9h1.7v-4.5h-7v4.4h1.8v1z"/>
  <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M174.3 8.3v1h-1.7v4.3h7V9.2H178v-.9Z"/>
  <path class="port port-22" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M178 20.5v-.9h1.7v-4.5h-7v4.4h1.7v1z"/>
  <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M182.2 8.3v1h-1.8v4.3h7V9.2h-1.7v-.9Z"/>
  <path class="port port-24" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M185.8 20.5v-.9h1.7v-4.5h-7v4.4h1.7v1z"/>
  <path class="port port-21" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M190.3 9.2v4.6h3.5v-.5h.4v.5h3.5V9.2h-3.5v.5h-.4v-.5Z"/>
  <path class="port port-23" style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M198 9.2v4.6h3.5v-.5h.4v.5h3.5V9.2h-3.5v.5h-.4v-.5Z"/>
  <path style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M75.7 15.2V20H79v-.6h.4v.6H83v-4.8h-3.5v.6h-.4V15Z"/>
  <path style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M83.3 15.2V20h3.5v-.6h.4v.6h3.5v-4.8h-3.5v.6h-.4V15Z"/>
  <path style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M75.7 9.3v4.6H79v-.6h.4v.7H83V9.2h-3.5v.6h-.4v-.5Z"/>
  <path style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M83.3 9.3v4.6h3.5v-.6h.4v.7h3.5V9.2h-3.5v.6h-.4v-.5Z"/>
  <path style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M66.8 15.2v.9h-1.7v4.4h7v-4.4h-1.7v-.9z"/>
  <path style="fill:#fdfdf1;stroke:#000;stroke-width:.40000078" d="M55.5 15.2v.9h-1.7v4.4h7v-4.4h-1.7v-.9z"/>
  <rect style="opacity:1;fill:#1a1a1a;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" width="8.3" height="3.8" x="41.9" y="17.2" rx="0" ry=".3"/>
  <rect style="fill:#b3b3b3;stroke-width:.26458383" width="5.4" height="1.2" x="43.4" y="18.6" rx="0" ry=".1"/>
  <circle r=".8" cy="19.7" cx="33.6" style="opacity:1;fill:#f1f413;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"/>
  <text y="20.5" x="25.7" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.11666656px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#a0a4b0;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" xml:space="preserve"><tspan style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#a0a4b0;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1" y="20.5" x="25.7">PWR</tspan></text>
  <circle r=".8" cy="16.6" cx="33.6" style="opacity:1;fill:#98b49b;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"/>
  <text y="17.4" x="25.3" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.11666656px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#a0a4b0;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" xml:space="preserve"><tspan style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#a0a4b0;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1" y="17.4" x="25.3">STAT</tspan></text>
  <circle r=".8" cy="13.5" cx="33.6" style="opacity:1;fill:#06f620;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"/>
  <text y="14.2" x="26.3" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.11666656px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#a0a4b0;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" xml:space="preserve"><tspan style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#a0a4b0;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1" y="14.2" x="26.3">RUN</tspan></text>
  <rect ry="1.3" rx="1.4" y="3.7" x="4.6" height="4.3" width="21.5" style="opacity:1;fill:#807d7d;fill-opacity:1;stroke:#5f6169;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"/>
  <text y="7.1" x="6.9" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:3.52777767px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#fff;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" xml:space="preserve"><tspan style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#fff;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1" y="7.1" x="6.9">TiFRONT</tspan></text>
  <text y="11.1" x="8.6" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:2.82222223px;line-height:16.25;font-family:'Headline R';-inkscape-font-specification:'Headline R Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#5f6169;fill-opacity:1;stroke:#2c4cc8;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal" xml:space="preserve"><tspan style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:'고딕체';-inkscape-font-specification:'고딕체 Bold';text-align:start;text-anchor:start;fill:#101010;fill-opacity:1;stroke:#090a0e;stroke-width:0;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-opacity:1" y="11.1" x="8.6">PIOLINK</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="100.2" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="100.2">1</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="100.2" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="100.2">2</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="108.2" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="108.2">3</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="108.2" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="108.2">4</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="116.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="116.1">5</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="124" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="124">7</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="132" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="132">9</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="138.9" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="138.9">11</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="116.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="116.1">6</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="124.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="124.1">8</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="131" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="131">10</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="138.9" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="138.9">12</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="149.2" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="149.2">13</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="157.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="157.1">15</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="165.2" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="165.2">17</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="173.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="173.1">19</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="181" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="181">21</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="189.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="189.1">23</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="149.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="149.1">14</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="157.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="157.1">16</tspan></text>
  <text transform="scale(1.03405 .96707)" y="26.1" x="153.6" xml:space="preserve"><tspan style="font-weight:700;font-size:2.6400001px" y="26.1" x="153.6">18</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="173.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="173.1">20</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="181" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="181">22</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="189.1" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="189.1">24</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="199.5" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="199.5">21</tspan></text>
  <text transform="scale(.9627 1.03874)" y="5.5" x="207.5" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="5.5" x="207.5">23</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="199.5" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="199.5">22</tspan></text>
  <text transform="scale(.9627 1.03874)" y="24.4" x="207.5" xml:space="preserve" style="font-size:11.99997044px;stroke-width:.9999975"><tspan style="font-weight:700;font-size:2.63999343px;stroke-width:.9999975" y="24.4" x="207.5">24</tspan></text>
  <rect ry=".6" rx=".1" y="2" x="29.2" height="6.7" width="41.6" style="display:inline;opacity:1;fill:#fd5;fill-opacity:.98969074;stroke:#090a0e;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.5999999;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"/>
  <text transform="scale(.98845 1.01168)" y="7.3" x="31.3" style="font-style:normal;font-weight:400;font-size:7.48945618px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.26458266" xml:space="preserve"><tspan style="font-size:5.64443064px;stroke-width:.26458266" y="7.3" x="31.3">3단계_보안 L2</tspan></text>
</svg>