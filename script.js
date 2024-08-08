import "./styles.css";

const weightInput = document.getElementById("weight");
const feedingPercentage = document.getElementById("feeding-percentage");
const feedingAmount = document.getElementById("feeding-amount");
let result = document.getElementById("feeding-amount");
let button = document
  .getElementById("calculate-button")
  .addEventListener("click", calculate);

function calculate(weight, feedingPercentage) {
  if (feedingPercentage === 1) {
    let result = weight * 0.02;
  } else if (feedingPercentage === 2) {
    let result = weight * 0.03;
  } else if (feedingPercentage === 3) {
    let result = weight * 0.04;
  }
  return result;
}

//event listener for calculate button
