<script>
    const totalTraffic = {
      code: { error_msg: "No error", is_success: true },
      general: {
        id: 25,
        ip: "10.10.145.26",
        name: "부민초등학교",
        update: "2022년 6월 19일 일요일 14:15",
      },
      img: {
        day: "http://mrtg.busanedu.net/static/mrtgdata/school_utm/10.10.145.26_14-day.png",
        month:
          "http://mrtg.busanedu.net/static/mrtgdata/school_utm/10.10.145.26_14-month.png",
        week: "http://mrtg.busanedu.net/static/mrtgdata/school_utm/10.10.145.26_14-week.png",
        year: "http://mrtg.busanedu.net/static/mrtgdata/school_utm/10.10.145.26_14-year.png",
      },
      traffic: {
        avin_d: 233583,
        avin_m: 1802636,
        avin_w: 1669452,
        avin_y: 1173376,
        avmxin_d: 350542,
        avmxin_m: 4872504,
        avmxin_w: 2644666,
        avmxin_y: 11636181,
        avmxout_d: 29371,
        avmxout_m: 540940,
        avmxout_w: 244890,
        avmxout_y: 2313831,
        avout_d: 25284,
        avout_m: 129960,
        avout_w: 119823,
        avout_y: 144823,
        cuin_d: 63350,
        cuin_m: 103480,
        cuin_w: 56367,
        cuin_y: 1878933,
        cuout_d: 15419,
        cuout_m: 16192,
        cuout_w: 17294,
        cuout_y: 273006,
        maxin_d: 7073274,
        maxin_m: 16546065,
        maxin_w: 18017700,
        maxin_y: 3707797,
        maxout_d: 266645,
        maxout_m: 3080046,
        maxout_w: 4577353,
        maxout_y: 831251,
      },
    };
  
    const wifiTraffic = {
    code: {
      error_msg: "No error",
      is_success: true
    },
    general: {
      id: 45,
      ip: "10.10.147.106",
      name: "중리초등학교",
      update: "2022년 6월 19일 일요일 15:15"
    },
    img: {
      day:   "http://mrtg.busanedu.net/static/mrtgdata/school_utm/10.10.148.66_14-day.png",
      month: "http://mrtg.busanedu.net/static/mrtgdata/school_utm/10.10.148.66_14-month.png",
      week:  "http://mrtg.busanedu.net/static/mrtgdata/school_utm/10.10.148.66_14-week.png",
      year:  "http://mrtg.busanedu.net/static/mrtgdata/school_utm/10.10.148.66_14-year.png"
    },
    traffic: {
      avin_d: 17638,
      avin_m: 452062,
      avin_w: 536203,
      avin_y: 317150,
      avmxin_d: 24620,
      avmxin_m: 1335186,
      avmxin_w: 968211,
      avmxin_y: 4269991,
      avmxout_d: 6066,
      avmxout_m: 443286,
      avmxout_w: 370648,
      avmxout_y: 942197,
      avout_d: 5561,
      avout_m: 61368,
      avout_w: 107129,
      avout_y: 32640,
      cuin_d: 18188,
      cuin_m: 28225,
      cuin_w: 1723,
      cuin_y: 635050,
      cuout_d: 5595,
      cuout_m: 5899,
      cuout_w: 4578,
      cuout_y: 198182,
      maxin_d: 389710,
      maxin_m: 9476342,
      maxin_w: 18968741,
      maxin_y: 1496783,
      maxout_d: 13836,
      maxout_m: 1692274,
      maxout_w: 3469217,
      maxout_y: 263568
    }
  };
  
    function trafficToArray(res) {
      const img = res.img;
      const max_t = 1000000000;
      const t = {};
  
      for (let [k, v] of Object.entries(res.traffic)) {
        let speed = v * 8;
        if (speed == 0) {
          t[k] = `0.0 bps ( 0.0 %)`;
        }
        for (let [m, c] of [[1000000000, "G"],[1000000, "M"],[1000, "k"],[1, ""],]) {
          if (speed / m >= 1) {
            t[k] = `${(speed / m).toFixed(1)} ${c}bps ( ${((speed / max_t) * 100).toFixed(1)} %)`;
            break;
          } else {
            continue;
          }
        }
      }
      return [
        ["일간","5분",img.day,"day",t.maxin_d,t.avin_d,t.cuin_d,t.maxout_d,t.avout_d,t.cuout_d,],
        ["주간","30분",img.week,"week",t.maxin_w,t.avin_w,t.cuin_d,t.maxout_w,t.avout_w,t.cuout_w,],
        ["월간","2시간",img.month,"month",t.maxin_m,t.avin_m,t.cuin_m,t.maxout_m,t.avout_m,t.cuout_m,],
        ["년간","1일",img.year,"year",t.maxin_y,t.avin_y,t.cuin_y,t.maxout_y,t.avout_y,t.cuout_y,],
      ];
    }
  
    let mrtgArrayData = trafficToArray(totalTraffic);
    let wifiArrayData = trafficToArray(wifiTraffic);
  </script>
  
  <div class="grid grid-cols-2 w-full">
    <div>
      <div class="m-3 p-3 text-lg border-rose-400 border-l-8 font-bold ">
        총 트래픽 현황
      </div>
      {#each mrtgArrayData as h}
        <div class="m-3 w-full">
          <div class="flex flex-col text-center items-center w-full">
            <h2
              class="bg-blue-300 py-2 my-3 w-full rounded font-semibold max-w-[500px] "
            >
              {h[0]} 그래프 ({h[1]} 단위 평균)
            </h2>
            <img
              src={h[2]}
              title={h[3]}
              alt={h[3]}
              class="max-w-[500px] w-full"
            />
            <table class="w-full max-w-[500px] text-sm">
              <tr>
                <th />
                <th scope="col">최대</th>
                <th scope="col">평균</th>
                <th scope="col">현재</th>
              </tr>
              <tr class="in">
                <th scope="row" class="text-green-500">수신</th>
                <td class="text-right">{h[4]}</td>
                <td class="text-right">{h[5]}</td>
                <td class="text-right">{h[6]}</td>
              </tr>
              <tr class="out">
                <th scope="row" class="text-blue-500">송신</th>
                <td class="text-right">{h[7]}</td>
                <td class="text-right">{h[8]}</td>
                <td class="text-right">{h[9]}</td>
              </tr>
            </table>
          </div>
        </div>
      {/each}
    </div>
  
    <div>
      <div class="m-3 p-3 text-lg border-rose-400 border-l-8 font-bold ">
       무선 트래픽 현황
      </div>
      {#each wifiArrayData as h}
        <div class="m-3 w-full">
          <div class="flex flex-col text-center items-center w-full">
            <h2
              class="bg-blue-300 py-2 my-3 w-full rounded font-semibold max-w-[500px] "
            >
              {h[0]} 그래프 ({h[1]} 단위 평균)
            </h2>
            <img
              src={h[2]}
              title={h[3]}
              alt={h[3]}
              class="max-w-[500px] w-full"
            />
            <table class="w-full max-w-[500px] text-sm">
              <tr>
                <th />
                <th scope="col">최대</th>
                <th scope="col">평균</th>
                <th scope="col">현재</th>
              </tr>
              <tr class="in">
                <th scope="row" class="text-green-500">수신</th>
                <td class="text-right">{h[4]}</td>
                <td class="text-right">{h[5]}</td>
                <td class="text-right">{h[6]}</td>
              </tr>
              <tr class="out">
                <th scope="row" class="text-blue-500">송신</th>
                <td class="text-right">{h[7]}</td>
                <td class="text-right">{h[8]}</td>
                <td class="text-right">{h[9]}</td>
              </tr>
            </table>
          </div>
        </div>
      {/each}
    </div>
  
  </div>
  