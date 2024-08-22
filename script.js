let parsedWeightInput;
let feedingPercentage;
let resultPerDayInPounds;
let resultPerDayInOunces;
let muscleMeatInPounds;
let muscleMeatInOunces;
let boneInPounds;
let boneInOunces;
let liverInPounds;
let liverInOunces;
let otherOrgansInPounds;
let otherOrgansInOunces;

// Get the element where the result will be displayed using a class
const userInputWeightEl = document.querySelector('.cat-weight-input');
const foodInPoundsEl = document.querySelector('.meal-weight-pounds');
const foodInOuncesEl = document.querySelector('.meal-weight-ounces');
const muscleInPoundsEl = document.querySelector('.muscle-weight-pounds');
const muscleInOuncesEl = document.querySelector('.muscle-weight-ounces');
const boneInPoundsEl = document.querySelector('.bone-pounds');
const boneInOuncesEl = document.querySelector('.bone-ounces');
const liverInPoundsEl = document.querySelector('.liver-pounds');
const liverInOuncesEl = document.querySelector('.liver-ounces');
const organsInPoundsEl = document.querySelector('.organ-pounds');
const organsInOuncesEl = document.querySelector('.organ-ounces');

// Log and parse the input field's value to the console at time of input
userInputWeightEl.addEventListener('input', () => {
    parsedWeightInput = parseFloat(userInputWeightEl.value);
});

// Grab the element for feeding percentage
const userInputFeedingPercentage = document.querySelector('.cat-feeding-percentage');

// Log and parse the input field's value to the console at time of input
userInputFeedingPercentage.addEventListener('input', () => {
    feedingPercentage = parseInt(userInputFeedingPercentage.value);
});

// Check that button is triggered when clicked
const myDailyFeedingButton = document.querySelector('.calculate-feeding');
myDailyFeedingButton.addEventListener('click', () => {

    // Call the function when you have the parsed weight and percentage
    if (!isNaN(parsedWeightInput) && parsedWeightInput > 0 && !isNaN(feedingPercentage) && feedingPercentage > 0) {
        // Display the result in the input field for ounces
        resultPerDayInOunces = calculateFeeding(parsedWeightInput, feedingPercentage);
        foodInOuncesEl.value = resultPerDayInOunces.toFixed(2);

        // Display the result in the input field for pounds
        resultPerDayInPounds = foodPerDayInPounds(parsedWeightInput, feedingPercentage);
        foodInPoundsEl.value = resultPerDayInPounds.toFixed(2);

				// Display the result for muscle meat in pounds
				muscleMeatInPounds = muscleMeatPounds(parsedWeightInput);
				muscleInPoundsEl.value = muscleMeatInPounds.toFixed(2);

				// Display the result for muscle meat in ounces
				muscleMeatInOunces = muscleMeatOunces(muscleMeatInPounds);
				muscleInOuncesEl.value = muscleMeatInOunces.toFixed(2);

				//Display the result for edible bone in pounds
				boneInPounds = bonePounds(parsedWeightInput);
				boneInPoundsEl.value = boneInPounds.toFixed(2);

				//Display the result for edible bone in ounces
				boneInOunces = boneOunces(boneInPounds);
				boneInOuncesEl.value = boneInOunces.toFixed(2);

				//Display the result for daily liver by pounds
				liverInPounds = liverPounds(parsedWeightInput);
				liverInPoundsEl.value = liverInPounds.toFixed(3);

				//Display the result for daily liver in ounces
				liverInOunces = liverOunces(liverInPounds);
				liverInOuncesEl.value = liverInOunces.toFixed(2);

				//Display the result for other organs by pounds
				otherOrgansInPounds = organPounds(parsedWeightInput);
				organsInPoundsEl.value = otherOrgansInPounds.toFixed(3);

				//Display the result for other organs in ounces
				otherOrgansInOunces = organOunces(otherOrgansInPounds);
				organsInOuncesEl.value = otherOrgansInOunces.toFixed(2);

    } else {
        alert('Please provide valid inputs for weight and feeding percentage.');
    }
});

function calculateFeeding(weight, percentage) {
    // Calculate daily feeding in pounds
    const foodInPounds = weight * (percentage / 100);
    // Calculate daily feeding in ounces
    const foodInOunces = foodInPounds * 16;
    // Return foodInOunces to result variable
    return foodInOunces;
}

function foodPerDayInPounds(weight, percentage) {
    const foodInPounds = weight * (percentage / 100);
    return foodInPounds;
}

function muscleMeatPounds() {
	//Muscle Meat (in pounds)=Daily Meal Weight (in pounds)×0.80
	const muscleMeatPounds = resultPerDayInPounds * 0.80
	return muscleMeatPounds
}

function muscleMeatOunces() {
//Muscle Meat (in ounces)= Muscle Meat (in pounds)x16
const muscleMeatOunces = muscleMeatInPounds * 16
return muscleMeatOunces
}

function bonePounds() {
//Edible Bone (in pounds)=Daily Meal Weight (in pounds)×0.10
	const boneByPounds = resultPerDayInPounds * 0.10
	return boneByPounds
}

function boneOunces() {
//Edible Bone (ounces)=bone (in pounds)×16
	const boneByOunces = boneInPounds * 16
	return boneByOunces
}

function liverPounds() {
	//Liver (in pounds)=Daily Meal Weight (in pounds)×0.05
	const liverByPounds = resultPerDayInPounds * 0.05
	return liverByPounds
}

function liverOunces() {
	//Liver (ounces)= liver (in pounds)x16
	const liverByOunces = liverInPounds * 16
	return liverByOunces
}

function organPounds() {
	//Other Organs (in pounds)=Daily Meal Weight (in pounds)×0.05
	const organsByPounds = resultPerDayInPounds * 0.05
	return organsByPounds
}

function organOunces() {
	//Other Organs (in ounces)=organs (in pounds)×16
	const organsByOunces = otherOrgansInPounds * 16
	return organsByOunces
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
