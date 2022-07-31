# 🌏 2030 부산세계박람회 웹 페이지 구현

`HTML`, `CSS`, `JAVASCRIPT` 를 이용해<br>
2030 부산세계박람회를 기원하는 마음으로 웹 페이지를 구현했습니다. <br>
`transform 3D`를 중점으로 연습했습니다.<br><br>

[2030 부산세계박람회 기원 웹 페이지 바로가기](https://lucent-cobbler-4c082d.netlify.app)<br>
https://lucent-cobbler-4c082d.netlify.app

(상업적 목적이 아닌 포트폴리오 용으로 제작되었습니다.) <br>

---

<br>

## Structure

### 1. 3D 입체 효과

- 8개의 직사각형을 원통형으로 배열 후 3D 효과를 주기 위해 `transform 3D`를 이용했습니다.

(1) perspective <br>
(2) transform : preserve-3d <br>
(3) animation : rotateY(0deg -> 360deg)

### 2. 이벤트리스너 이용한 애니메이션 회전 효과 멈추기 (mouseenter/mouseleave)

### 3. 날씨 API를 이용한 실시간 날씨 공유

- 위치 정보에 동의할 시, `fetch`를 이용해 이용자 위치의 실시간 날씨 API를 받아 공유합니다.<br>

---

<br>

## 아쉬운 점 및 이후 개선 방향

1. 날씨 API : 더 많은 자료를 받으려고 하니 비동기적으로 자료를 불러옴에 따라<br>
   `null`로 인식이 되는 경우가 있었습니다. <br>
   (`Promise`, `async/await`를 이용해 해결해보려고 합니다.)

2. 사이트가 많이 느린 부분에 대한 고민
