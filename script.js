// Grab the element for weight input
const userInputWeightEl = document.querySelector('.cat-weight-input');
let parsedWeightInput;
let feedingPercentage;
let feedingResult;

// Get the element where the result will be displayed using a class
const feedingResultEl = document.querySelector('.feeding-result');

// code that logs and parses the input field's value to the console at time of input
userInputWeightEl.addEventListener('input', () => {
    parsedWeightInput = parseFloat(userInputWeightEl.value);
    console.log('parsedWeightInput', parsedWeightInput);
});

// grab the element for feeding percentage
const userInputFeedingPercentage = document.querySelector('.cat-feeding-percentage');
console.log('userInputFeedingPercentage', userInputFeedingPercentage);

// code that logs and parses the input field's value to the console at time of input
userInputFeedingPercentage.addEventListener('input', () => {
    feedingPercentage = parseInt(userInputFeedingPercentage.value);
    console.log('feedingPercentage (parsed)', feedingPercentage);
});

// check that button is triggered when clicked
const myDailyFeedingButton = document.querySelector('.calculate-feeding');
myDailyFeedingButton.addEventListener('click', () => {
    console.log('userClick', myDailyFeedingButton);
    console.log('userInputs: ', feedingPercentage, parsedWeightInput);

    // call the function when you have the parsed weight and percentage
    if (!isNaN(parsedWeightInput) && parsedWeightInput > 0 && !isNaN(feedingPercentage) && feedingPercentage > 0) {
        feedingResult = calculateFeeding(parsedWeightInput, feedingPercentage);
        console.log('Feeding Result:', feedingResult);

        // Display the result on the page using a class
        feedingResultEl.textContent = 'Daily Feeding Amount: ' + feedingResult.toFixed(2) + ' ounces';
    } else {
        alert('Please provide valid inputs for weight and feeding percentage.');
    }
});

function calculateFeeding(weight, percentage) {
    // calculate daily feeding in pounds
    const foodInPounds = weight * (percentage / 100);
    console.log('foodInPounds', foodInPounds);

    // calculate daily feeding in ounces
    const foodInOunces = foodInPounds * 16;
    console.log('foodInOunces', foodInOunces);

    // return foodInOunces to result variable
    return foodInOunces;
}




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

// function calculate(weight, feedingPercentage) {
// 	if (feedingPercentage === 1) {d
// 		let result = weight * 0.02;ls
// 	} else if (feedingPercentage === 2) {
// 		let result = weight * 0.03;
// 	} else if (feedingPercentage === 3) {
// 		let result = weight * 0.04;
// 	}
// 	return result;
// }

// DONE: render the html outline
// DONE: accept and capture user input
// DONE: add event listener for calculate button
// WIP: write function to apply user input into calculation
// TODO: output calculated feeding amount (in oz.)

userInputWeightEl