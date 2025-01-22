// Purpose: ad hoc testing of the class representing a simple monthly loan.

// Dependencies
/// <reference path = "../../constants.ts" />
/// <reference path="../../loan/loan.ts" />
/// <reference path="../../loan/simpleLoan.ts" />
/// <reference path="../../exceptions/parameterValidators.ts" />
/// <reference path="../../exceptions/validationError.ts" />
/// <reference path="../../exceptions/errorMessages.ts" />
/// <reference path="../../exceptions/errorStringHandling.ts" />

const success = 'The test passed successfully!';
const failure = 'The test failed!';
// Test cases

try {
    // Testing the payments function SimpleLoan class with a simple valid case
    console.log('Now testing calculations with a yearly interest rate and monthly payments:');
    console.log('Testing loan payment for an amount of 5000, with a yearly interest of 12.68%, and 12 payments:');
    const simpleLoan = new LoanSimple.SimpleLoan(0.126825, 5000, 12);
    const result = simpleLoan.calculatePayment();
    console.log ("Result: " + result)
    const expected = 444.24; // Previously calculated in loanPaymentTests.ts
    const report = Math.abs(result - expected) < 0.01 ? success : failure;
    console.log(report);
  
    {// Now a simple case with no interest
    console.log('Testing loan payment for an amount of 5000, with a monthly interest rate of 0%, and 12 payments:');
    const simpleLoan = new LoanSimple.SimpleLoan(0, 5000, 12);
    const result = simpleLoan.calculatePayment();
    console.log ("Result: " + result)
    const expected = 416.67; // Simply 5000 / 12 because there is no interest.
    const report = Math.abs(result - expected) < 0.01 ? successMessage : failureMessage;
    console.log(report);
    }
  
    {
      console.log('Testing an exceptions case with a negative amount of money (-5000):');
      const simpleLoan = new LoanSimple.SimpleLoan(0.1, -5000, 12) // Construct an invalid loan which throws an exception 
      const result = simpleLoan.calculatePayment(); // Exception stops this being executed.
      console.log (result) // Doesn't get executed
    }
  
  }
    catch (error: any) {
    if (error instanceof ValidateError.ValidationError) {
      console.log(`Caught expected error: ${error.message}`);
    } else {
      console.log(`Unexpected error: ${error}`);
      console.log(typeof error);
      
    }
  }