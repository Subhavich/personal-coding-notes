// input
const input = document.querySelector("#ex1 input");
const para = document.querySelector("#ex1 p");
input.addEventListener("input", (e) => {
  para.innerHTML = `You pressed "${e.data}"`;
});
input.addEventListener("change", (e) => {
  para.innerHTML = `Current Value is "${input.value}"`;
});

// hover
const hover = document.querySelector("#ex2 h4");
const link = "giphy";

function mouseEnter() {
  const gif = document.createElement("img");
  gif.classList.add("gif");
  gif.src = `./res/${link}.gif`;
  hover.appendChild(gif);
  document.documentElement.style.cursor = "pointer";
}
function mouseMove(e) {
  const gif = document.querySelector(".gif");
  // gif.style.transform = `translateX(${e.screenX * 0.15 - gif.width * 0.9}px)`;
  gif.style.transform = `translateX(${e.offsetX - gif.width / 4}px)`;
}
function mouseOut(e) {
  hover.removeChild(hover.firstElementChild);
  document.documentElement.style.cursor = "default";
}

hover.addEventListener("mouseenter", mouseEnter);
hover.addEventListener("mousemove", mouseMove);
hover.addEventListener("mouseout", mouseOut);

const btnChange = document.querySelector("#ex2 button");
function btnClick(e) {
  this.classList.toggle("text-lg");
}
// btnChange.addEventListener("click", () => {
//   btnChange.classList.toggle("text-lg");
// });
btnChange.addEventListener("click", btnClick);
