// Purpose: ad hoc testing for the rate conversion function.

// Dependencies
/// <reference path="../../computations/financial_computations/interest_computations/ratePerPeriod.ts" />
/// <reference path = "../../constants.ts" />

const successMsg = 'The test passed successfully!';
const failureMsg = 'The test failed!';

console.log('Testing conversion to monthly payment for an annual percentage of 5%');
const result = RatePerPeriod.ratesPerPeriod(0.05);
const expected = 0.004074; 
console.log ("Result: " + result)
const report = Math.abs(result - expected) < 1e-10 ? successMsg : failureMsg;
console.log(report);

{
console.log('Testing conversion for 24 payments with an annual percentage of 4%:');
const result = RatePerPeriod.ratesPerPeriod(0.04, 24);
console.log(result);
const expected = 0.001636; 
console.log ("Result: " + result)
const report = Math.abs(result - expected) < 1e-10 ? successMsg : failureMsg
console.log(report);
}

  