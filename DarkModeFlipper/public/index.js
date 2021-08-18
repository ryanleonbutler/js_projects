const light = "rgb(245, 245, 220)";
const dark = "rgb(51, 51, 51)";
const lightModeText = "Mode => Light";
const darkModeText = "Mode => Dark";

function changeMode() {
  const body = document.getElementById("colorFlipperBody");
  const heading = document.getElementById("colorFlipperH1");
  const button = document.getElementById("colorFlipperButton");

  currentMode = body.style.backgroundColor;

  if (currentMode == light) {
    heading.innerHTML = darkModeText;
    body.style.backgroundColor = dark;
    heading.style.color = light;
    button.style.backgroundColor = dark;
    button.style.color = light;
  } else if (currentMode == dark) {
    heading.innerHTML = lightModeText;
    body.style.backgroundColor = light;
    heading.style.color = dark;
    button.style.backgroundColor = light;
    button.style.color = dark;
  }
}
