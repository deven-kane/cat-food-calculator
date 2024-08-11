// import './styles.css';

// grab the element for weight input
const userInputWeightEl = document.querySelector('.cat-weight-input')
console.log(userInputWeightEl)

// console.log(typeof userInputWeightEl)
//code that logs the input field's value to the console at time of click
userInputWeightEl.addEventListener('click', () => {
  console.log('userInput', userInputWeightEl.value)
})

//grab the element for feeding percentage
const userInputFeedingPercentage = document.getElementById("feedingPercentage")
console.log(userInputFeedingPercentage)

//console.log(typeof userInputFeedingPercentage)
//code that logs the input field's value to the console at time of click
userInputFeedingPercentage.addEventListener('click', () => {
	console.log('userInput', userInputFeedingPercentage.value)
})

// ensure the value exists
// save value to apply calculation of feeding


// const weightInput = document.getElementById('weight');
// const feedingPercentage = document.getElementById('feeding-percentage');
// const feedingAmount = document.getElementById('feeding-amount');
// let calculatedResult = document.getElementById('feeding-amount');
// let calculateButton = document
// 	.getElementById('calculate-button')
// 	.addEventListener('click', calculate);

// too much all at once. youre trying to solve it in one go. try to isolate the steps and solve one at a time.
// understand scope and how that impacts variable declaration + referencing
// ask yourself why am I writing logic whose behavior I can't even test locally yet. More 'horse before the buggy' habits
// have you verified that you're even referencing the variables created or did you just assume you wrote perfect code the first time around after a 6 year hiatus?
// why are you so obstinant about doing the little things to make coding less miserable (i.e. - documenting, logging, rubber ducky programming, etc. etc. etc.)
// you don't get billed for each letter/syllable in a variable or function name. less is never more when youre this new to programming. thisVariableHoldsTheValueOfTheCalculationForCatFeedingAmountInOunces is 1000x better than result
// when coding, please, before ever moving on to the next step (assuming you actually took the time to map out your approach) please, please, please be honest with yourself --
  // // 1. are you confident in the behavior thats occurring, and that it'll only behave as you expect to?
  // // 2. do you understand how and why its written the way that it is? could you delete that code and recreate it once more?
  // // 3. I can defend my logic and decisions with reason and resources as to why that apporach is valid.

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

// DONE: render the html outline
// WIP: accept and capture user input
// TODO: add event listener for calculate button
// TODO: write function to apply user input into calculation
// TODO: output calculated feeding amount (in oz.)

userInputWeightEl