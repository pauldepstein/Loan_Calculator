// File for the class of the simplest loan possible -- a constant payment each period with no down payment.
// Dependencies
/// <reference path="../exceptions/parameterValidators.ts" />
/// <reference path="loan.ts" />
/// <reference path = "../computations/financial_computations/interest_computations/loanPayment.ts" />

namespace LoanSimple{
// A class for the simplest loan possible -- a constant payment each period with no down payment
export class SimpleLoan extends LoanBase.Loan {
  protected periodsPerYear: number; // The number of periods in a year -- usually 12 for monthly payments
  // See the base class constructor for the other properties
  constructor(annualRate: number, amount: number, numPayments: number, periodsPerYear = Constants.MONTHS_IN_YEAR) {
    
    super(annualRate, amount, numPayments);
    this.periodsPerYear = periodsPerYear;

    // Validate the periods-per-year parameter, other params are validated in the base class
    ParameterValidators.validateNumPeriods(this.periodsPerYear, true);
  }

  // Implement the abstract method to calculate the payment for a simple loan
  calculatePayment(): number {
    // Formula for monthly simple interest loan payment
    return LoanPayments.loanPaymentsMonthly(this.annualRate, this.amount, this.numPayments, this.periodsPerYear);
  }
}
}