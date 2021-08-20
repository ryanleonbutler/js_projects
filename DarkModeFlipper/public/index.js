const light = "rgb(245, 245, 220)";
const dark = "rgb(51, 51, 51)";
const lightModeText = "Mode = Light";
const darkModeText = "Mode = Dark";

function changeMode() {
  const body = document.getElementById("body");
  console.log(body);
  const box2 = document.getElementById("box-2")
  console.log(box2);
  const heading = document.getElementById("heading");
  console.log(heading);
  const button = document.getElementById("button");
  console.log(button);

  currentMode = heading.innerHTML; 
  console.log(currentMode);

  if (currentMode == lightModeText) {
    heading.innerHTML = darkModeText;
    body.style.backgroundColor = dark;
    heading.style.color = light;
    box2.style.backgroundColor = dark;
    button.style.backgroundColor = dark;
    button.style.color = light;
  } else if (currentMode == darkModeText) {
    heading.innerHTML = lightModeText;
    body.style.backgroundColor = light;
    heading.style.color = dark;
    box2.style.backgroundColor = light;
    button.style.backgroundColor = light;
    button.style.color = dark;
  }
}
