let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");

let setGradient = function () {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.textContent = body.style.background;
};

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

let generateRandomColor = function () {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};

button.addEventListener("click", function () {
  let randomColor1 = generateRandomColor();
  let randomColor2 = generateRandomColor();

  color1.value = randomColor1;
  color2.value = randomColor2;

  body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
  h3.textContent = body.style.background;
});
