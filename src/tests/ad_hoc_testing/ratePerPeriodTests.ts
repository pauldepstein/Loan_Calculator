// Purpose: ad hoc testing for the rate conversion function.
const successMsg = 'The test passed successfully!';
const failureMsg = 'The test failed!';
const ratesPerPeriodTest = require('../../computations/financial_computations/interest_computations/ratePerPeriod').ratesPerPeriod; 
const ValidationFailure = require('../../exceptions/validationError').ValidationError;

console.log('Testing conversion to monthly payment for an annual percentage of 5%');
const result = ratesPerPeriodTest(0.05);
const expected = 0.004074; 
const report = Math.abs(result - expected) < 1e-10 ? successMsg : failureMsg;
console.log(report);

{
console.log('Testing conversion for 24 payments with an annual percentage of 4%:');
const result = ratesPerPeriodTest(0.04, 24);
console.log(result);
const expected = 0.001636; 
const report = Math.abs(result - expected) < 1e-10 ? successMsg : failureMsg
console.log(report);
}

  