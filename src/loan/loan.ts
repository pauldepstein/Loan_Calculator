namespace LoanBase {
// An abstract base class for all types of loans
/// <reference path="../exceptions/parameterValidators.ts" />
export abstract class Loan {
    protected annualRate: number; // The annual interest rate
    protected amount: number; // The amount of the loan
    protected numPayments: number;  // The number of payments
  
    constructor(annualRate: number, amount: number, numPayments: number) {
      this.annualRate = annualRate;
      this.amount = amount;
      this.numPayments = numPayments;

      // Validate all parameters  -- for example interest rate can not be negative.
      ParameterValidators.validateInterestRate(this.annualRate);
      ParameterValidators.validateAmount(this.amount);
      ParameterValidators.validateNumPeriods(this.numPayments);
    }
  
    // Abstract method for calculating the loan payment
    abstract calculatePayment(): number;
  }
}