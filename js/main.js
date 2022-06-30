const circle = document.querySelector(".container-circle");
const article = document.querySelectorAll("article");

//article에 마우스를 올리면 부모요소인 .container-circle의 animation-play-state값을 "paused"로 변경
for (let el of article) {
  el.addEventListener("mouseenter", (e) => {
    circle.style.animationPlayState = "paused";
  });
}

//article에 마우스가 떠나면 부모요소인 .container-circle의 animation-play-state값을 "running"으로 변경
for (let el of article) {
  el.addEventListener("mouseleave", (e) => {
    circle.style.animationPlayState = "running";
  });
}
