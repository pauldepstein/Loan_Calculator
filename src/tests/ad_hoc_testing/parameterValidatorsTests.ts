// Purpose: ad hoc testing of the parameter validation functions in the exceptions folder
// Dependencies
/// <reference path="../../exceptions/parameterValidators.ts" />
/// <reference path="../../exceptions/validationError.ts" />

// Interest rate tests
try {
  console.log('Testing valid interest rate -- 5:');
  ParameterValidators.validateInterestRate(5);
  console.log('Valid rate of passed successfully!');

  console.log('Testing negative interest rate of -1:');
  ParameterValidators.validateInterestRate(-1);
} catch (error: any) {
  if (error instanceof ValidateError.ValidationError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
  }
}

try {
  console.log('Testing zero interest rate (not allowed):');
  ParameterValidators.validateInterestRate(0, false, false);
} catch (error: any) {
  if (error instanceof ValidateError.ValidationError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
  }
}

try {
  console.log('Testing zero interest rate (allowed):');
  ParameterValidators.validateInterestRate(0, true, false);
  console.log('Zero interest rate passed!');
} catch (error) {
  console.log(`Unexpected error: ${error}`);
}

// Number of periods tests
try {
  console.log('Testing valid number of periods -- 5:');
  ParameterValidators.validateNumPeriods(5);
  console.log('Valid number of periods passed successfully!');

  console.log('Testing negative number of periods (-1):');
  ParameterValidators.validateNumPeriods(-1);
} catch (error: any) {
  if (error instanceof ValidateError.ValidationError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
  }
}

try {
  console.log('Testing fractional number of periods (2.5):');
  ParameterValidators.validateNumPeriods(2.5);
} catch (error: any) {
  if (error instanceof ValidateError.ValidationError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
  }
}

// Amount tests
try {
  console.log('Testing that amount of 5.5 is positive:');
  ParameterValidators.validateAmount(5.5);
  console.log('Valid amount passed successfully!');

  console.log('Testing zero money:');
  ParameterValidators.validateAmount(0);
} catch (error: any) {
  if (error instanceof ValidateError.ValidationError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
  }
}

try {
  console.log('Testing for negative sum of -2.5:');
  ParameterValidators.validateAmount(-2.5);
} catch (error: any) {
  if (error instanceof ValidateError.ValidationError) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
  }
}