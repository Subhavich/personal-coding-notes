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
hover.addEventListener("mouseover", () => {
  const gif = document.createElement("img");
  gif.classList.add("gif");
  gif.src = "/Testing/res/giphy.gif";
  hover.appendChild(gif);
  document.documentElement.style.cursor = "pointer";
});
hover.addEventListener("mouseout", () => {
  hover.removeChild(hover.firstElementChild);
  document.documentElement.style.cursor = "default";
});

const btnChange = document.querySelector("#ex2 button");
btnChange.addEventListener("click", () => {
  btnChange.classList.toggle("text-lg");
});
