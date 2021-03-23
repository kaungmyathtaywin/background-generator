const h3 = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll(".color");
const body = document.getElementById("gradient");
const button = document.querySelector("button");

const setGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.textContent = body.style.background;
};

const generateRandomColor = () => {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", function () {
  let randomColor1 = generateRandomColor();
  let randomColor2 = generateRandomColor();

  color1.value = randomColor1;
  color2.value = randomColor2;

  body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
  h3.textContent = body.style.background;
});
