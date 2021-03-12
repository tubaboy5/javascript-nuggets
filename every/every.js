const isBelowThreshold = (number) => number < 10;

const belowThreshold = [3, 9, 7, 5, 1, 8];
const aboveThreshold = [1, 8, 11, 16, 3, 9];

//This will check the belowThreshold array if EVERY integer is below the threshold.
//The result is true since all the values are under 10
console.log(belowThreshold.every(isBelowThreshold));

//This will check the aboveThreshold array if EVERY integer is below the threshold.
//The result is false since some of the values are over 10
console.log(aboveThreshold.every(isBelowThreshold));
