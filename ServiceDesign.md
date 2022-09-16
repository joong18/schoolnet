# Store 요약

## **1. 학교 기본 정보**

- 설명 : 한 학교(기관)의 기본 정보 저장

- export 변수 : organ

- export 함수 

    | 함수명 | 의미 |
    |---|:---|
    | `subscribe` | store subscribe | 
    | `initOrgan` | 모든 스토어 리셋 후 다시 불러옮 | 
    | `fetchOrgan` | 학교 기본 정보 불러옮 |

- API URL : `/organ/${organId}`

- Store 형식
    ```json
    {
        "address": "부산광역시 부산진구 앙대로941번길 4", 
        "buildbase": "공립", 
        "codenum": 3, 
        "connect": "연동", 
        "ctrlorg": "남부", 
        "grade": "초등학교", 
        "homepage": "http://yj.es.kr", 
        "id": 98, 
        "latitude": 35, 
        "linecnt": "1", 
        "longitude": 129, 
        "name": "양정초등학교", 
        "subcode": 43, 
        "subgrade": "남부-초", 
        "tel": "051-866-6433", 
        "wcodenum": 19, 
        "wsubcode": 29
    }
    ```

## **2. 장비 기본 정보**

- 설명 : 한 학교(기관)의 모든 장비에 대한 기본 정보 저장

- export 변수 : devices

- export 함수 

    | 함수명 | 의미 |
    |---|:---|
    | `reset` | store 초기화 | 
    | `subscribe` | store subscribe | 
    | `fetchDevices` | 한 학교의 모든 장비 기본 정보 불러옮 |

- API URL : `/organ/${organId}/devices`

- Store 형식
    ```json
    [
      {
        "devcodeid": 4, 
        "hostname": null, 
        "id": 1804, 
        "ip": "10.19.128.21", 
        "ipnum": 169050133, 
        "lineid": 55, 
        "location": null, 
        "mac": "08:35:B2:50:1B:35", 
        "maker": "CoreEdge", 
        "model": "C3100-24TL", 
        "name": "L2스위치#1", 
        "nick": "CE_C3100", 
        "orgid": 55, 
        "project": "4단계 스쿨넷 사업", 
        "type": "L2스위치"
      }, 
    ...
    ]
    ```

## **3. 장비 alive(Ping 응답 여부) 정보**

- 설명 : 한 학교(기관)의 모든 장비에 대한 ping 응답 여부 정보 저장

- export 변수 : isAlive

- export 함수 

    | 함수명 | 의미 |
    |---|:---|
    | `reset` | store 초기화 | 
    | `subscribe` | store subscribe | 
    | `fetchIsAlive` | 한 학교의 모든 장비에 대한 alive 정보 불러옮 |

- API URL : `/organ/${organId}/isalive`

- Store 형식 : Map으로 저장
    ```js
    Map.set(key, value) // key: 장비 ID, value: (true or false)
    ```
- API 응답 형식
    ```json
    {
      "1031": true, 
      "1032": true, 
      "1033": true, 
      "1034": true,
       ...
    }  => Map으로 저장 key: 장비ID(Number), value: alive 여부(true, false)
    ```

## **4. 장비 Port 상태 정보**

- 설명 : 한 장비의 Port 상태 정보 저장

- export 변수 : ports

- export 함수 

    | 함수명 | 의미 |
    |---|:---|
    | `reset` | store 초기화 (Map clear)| 
    | `hasPortStatusStore` | 한 장비의 Port Status Store가 존재하는 지 확인 | 
    | `getPortStatusStore` | 한 장비의 Port Status Store를 가져옮 |
    | `fetchPortStatus` | 한 장비의 Port Status를 불러옮

- API URL : `/device/${deviceId}/portstatus`

- Store 형식 : Map으로 저장
    ```js
    Map.set(key, value)          // key: 장비 ID, value: Port Status Store
    value = [ time, portstatus ] // time은 fetch시간 unix time
    portstatus                   // API 응답 데이터 저장
    ```
- API 응답 형식
    ```json
    [
      {
        "ifindex": "1", 
        "name": "gigabitethernet0/1", 
        "port": 1, 
        "speed": "1000", 
        "status": "down"
      }, 
      {
        "ifindex": "2", 
        "name": "gigabitethernet0/2", 
        "port": 2, 
        "speed": "1000", 
        "status": "down"
      }, 
      ...
    ]
    ```