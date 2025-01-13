// Purpose: ad hoc testing of the parameter validation functions in the exceptions folder.
const validateParameterHandling = require('../../exceptions/parameterValidators');
const ValidationErrorHandling = require('../../exceptions/validationError');

let validateInterest = validateParameterHandling.validateInterestRate;
let validatePeriods = validateParameterHandling.validateNumPeriods;
let validateSum = validateParameterHandling.validateAmount;  
let validateError = ValidationErrorHandling.ValidationError;

// Interest rate tests
try {
  console.log('Testing valid interest rate:');
  validateInterest(5);
  console.log('Valid rate passed successfully!');

  console.log('Testing negative interest rate:');
  validateInterest(-1);
} catch (error: any) {
  if (error instanceof validateError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
  }
}

try {
  console.log('Testing zero interest rate (not allowed):');
  validateInterest(0, false, false);
} catch (error: any) {
  if (error instanceof validateError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
  }
}

try {
  console.log('Testing zero interest rate (allowed):');
  validateInterest(0, false, true);
  console.log('Zero interest rate passed!');
} catch (error) {
  console.log(`Unexpected error: ${error}`);
}

// Number of periods tests
try {
  console.log('Testing valid number of periods:');
  validatePeriods(5);
  console.log('Valid number of periods passed successfully!');

  console.log('Testing negative number of periods:');
  validatePeriods(-1);
} catch (error: any) {
  if (error instanceof validateError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
  }
}

try {
  console.log('Testing fractional number of periods:');
  validatePeriods(2.5);
} catch (error: any) {
  if (error instanceof validateError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
  }
}

// Amount tests
try {
  console.log('Testing that amount is positive:');
  validateSum(5.5);
  console.log('Valid amount passed successfully!');

  console.log('Testing zero money:');
  validateSum(0);
} catch (error: any) {
  if (error instanceof validateError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
  }
}

try {
  console.log('Testing for negative sums:');
  validateSum(-2.5);
} catch (error: any) {
  if (error instanceof validateError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
  }
}