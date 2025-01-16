// Purpose: ad hoc testing of the parameter validation functions in the exceptions folder.

// Dependencies
const validateParameterHandling = require('../../exceptions/parameterValidators');
const ValidationErrorHandling = require('../../exceptions/validationError');

const validateInterestRateTest = validateParameterHandling.validateInterestRate;
const validateNumPeriodsTest = validateParameterHandling.validateNumPeriods;
const validateAmountTest = validateParameterHandling.validateAmount;  
const ValidationErrorTest = ValidationErrorHandling.ValidationError;

// Interest rate tests
try {
  console.log('Testing valid interest rate:');
  validateInterestRateTest(5);
  console.log('Valid rate passed successfully!');

  console.log('Testing negative interest rate:');
  validateInterestRateTest(-1);
} catch (error: any) {
  if (error instanceof ValidationErrorTest) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
  }
}

try {
  console.log('Testing zero interest rate (not allowed):');
  validateInterestRateTest(0, false, false);
} catch (error: any) {
  if (error instanceof ValidationErrorTest) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
  }
}

try {
  console.log('Testing zero interest rate (allowed):');
  validateInterestRateTest(0, true, false);
  console.log('Zero interest rate passed!');
} catch (error) {
  console.log(`Unexpected error: ${error}`);
}

// Number of periods tests
try {
  console.log('Testing valid number of periods:');
  validateNumPeriodsTest(5);
  console.log('Valid number of periods passed successfully!');

  console.log('Testing negative number of periods:');
  validateNumPeriodsTest(-1);
} catch (error: any) {
  if (error instanceof ValidationErrorTest) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
  }
}

try {
  console.log('Testing fractional number of periods:');
  validateNumPeriodsTest(2.5);
} catch (error: any) {
  if (error instanceof ValidationErrorTest) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
  }
}

// Amount tests
try {
  console.log('Testing that amount is positive:');
  validateAmountTest(5.5);
  console.log('Valid amount passed successfully!');

  console.log('Testing zero money:');
  validateAmountTest(0);
} catch (error: any) {
  if (error instanceof ValidationErrorTest) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
  }
}

try {
  console.log('Testing for negative sums:');
  validateAmountTest(-2.5);
} catch (error: any) {
  if (error instanceof ValidationErrorTest) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
  }
}