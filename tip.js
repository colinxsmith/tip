
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
// Top Slider

const topInput = document.querySelector("#top");
const topLabelValue = document.querySelector("label[for='top'] .value");

topInput.addEventListener("input", (event) => {
  const value = `${event.target.value}%`;

  topLabelValue.innerHTML = value;
  tooltip.style.setProperty("--triangle-top", value);
});

// Left Slider

const leftInput = document.querySelector("#left");
const leftLabelValue = document.querySelector("label[for='left'] .value");

leftInput.addEventListener("input", (event) => {
  const value = `${event.target.value}%`;

  leftLabelValue.innerHTML = value;
  tooltip.style.setProperty("--triangle-left", value);
});

// Reset

const resetButton = document.querySelector(".reset");
const baseDefault = "14px";
const heightDefault = "10px";
const topDefault = "100%";
const leftDefault = "50%";

resetButton.addEventListener("click", (event) => {
  baseLabelValue.innerHTML = baseDefault;
  tooltip.style.setProperty("--triangle-base", baseDefault);

  heightLabelValue.innerHTML = heightDefault;
  tooltip.style.setProperty("--triangle-height", heightDefault);

  topLabelValue.innerHTML = topDefault;
  tooltip.style.setProperty("--triangle-top", topDefault);

  leftLabelValue.innerHTML = leftDefault;
  tooltip.style.setProperty("--triangle-left", leftDefault);
});
