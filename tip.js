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
//T Top Slider

const ttopInput = document.querySelector("#ttop");
const ttopLabelValue = document.querySelector("label[for='ttop'] .value");

ttopInput.addEventListener("input", (event) => {
  const value = `${event.target.value}px`;

  ttopLabelValue.innerHTML = value;
  tooltip.style.setProperty("--tip-top", value);
});
//T Position Radio

const tabsoluteInput = document.querySelector("#tabsolute");
const tabsoluteValue = document.querySelector("label[for='tabsolute'] .value");
const trelativeInput = document.querySelector("#trelative");
const trelativeValue = document.querySelector("label[for='trelative'] .value");

tabsoluteInput.addEventListener("input", (event) => {
  const value = `${event.target.value}`;
console.log(value);
  tabsoluteValue.innerHTML = value;
  tooltip.style.setProperty("--tip-position", value);
});
trelativeInput.addEventListener("input", (event) => {
  const value = `${event.target.value}`;

  console.log(value);
  trelativeValue.innerHTML = value;
  tooltip.style.setProperty("--tip-position", value);
});
// Reset

const resetButton = document.querySelector(".reset");
const baseDefault = "30px";
const heightDefault = "15px";
const leftDefault = "50%";
const tleftDefault = "0%";
const ttopDefault = "0px";
const tpositionDefault="absolute";

resetButton.addEventListener("click", (event) => {
  baseLabelValue.innerHTML = baseDefault;
  tooltip.style.setProperty("--triangle-base", baseDefault);

  heightLabelValue.innerHTML = heightDefault;
  tooltip.style.setProperty("--triangle-height", heightDefault);

  leftLabelValue.innerHTML = leftDefault;
  tooltip.style.setProperty("--triangle-left", leftDefault);
 
  tleftLabelValue.innerHTML = tleftDefault;
  tooltip.style.setProperty("--tip-left", tleftDefault);

  ttopLabelValue.innerHTML = ttopDefault;
  tooltip.style.setProperty("--tip-top", ttopDefault);

  tabsoluteValue.innerHTML = tpositionDefault;
  tooltip.style.setProperty("--tip-position", tpositionDefault);
});
