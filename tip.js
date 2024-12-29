const tooltip = document.querySelector(".tooltip");

// Base Slider

const baseInput = document.querySelector("#base");
const baseLabelValue = document.querySelector("label[for='base'] .value");

baseInput.addEventListener("input", (event) => {
  const value = `${event.target.value}px`;

  baseLabelValue.innerHTML = value;
  tooltip.style.setProperty("--triangle-base", value);
});

// Height Slider

const heightInput = document.querySelector("#height");
const heightLabelValue = document.querySelector("label[for='height'] .value");

heightInput.addEventListener("input", (event) => {
  const value = `${event.target.value}px`;

  heightLabelValue.innerHTML = value;
  tooltip.style.setProperty("--triangle-height", value);
});

// Left Slider

const leftInput = document.querySelector("#left");
const leftLabelValue = document.querySelector("label[for='left'] .value");

leftInput.addEventListener("input", (event) => {
  const value = `${event.target.value}%`;

  leftLabelValue.innerHTML = value;
  tooltip.style.setProperty("--triangle-left", value);
});


//T Left Slider

const tleftInput = document.querySelector("#tleft");
const tleftLabelValue = document.querySelector("label[for='tleft'] .value");

tleftInput.addEventListener("input", (event) => {
  const value = `${event.target.value}%`;

  tleftLabelValue.innerHTML = value;
  tooltip.style.setProperty("--tip-left", value);
});
// Reset

const resetButton = document.querySelector(".reset");
const baseDefault = "30px";
const heightDefault = "15px";
const leftDefault = "50%";
const tleftDefault = "0%";

resetButton.addEventListener("click", (event) => {
  baseLabelValue.innerHTML = baseDefault;
  tooltip.style.setProperty("--triangle-base", baseDefault);

  heightLabelValue.innerHTML = heightDefault;
  tooltip.style.setProperty("--triangle-height", heightDefault);

  leftLabelValue.innerHTML = leftDefault;
  tooltip.style.setProperty("--triangle-left", leftDefault);
 
  tleftLabelValue.innerHTML = tleftDefault;
  tooltip.style.setProperty("--tip-left", tleftDefault);
});
