/**
 * A utility function to validate the parameters of the loanPayments function.
 * @param {number} rate - The monthly interest rate.
 * @param {number} amount - The loan amount.
 * @param {number} periods - The number of payments.
 * @param {boolean} [allowZero=true] - True if zero interest rates are allowed.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * @throws {ValidationError} - If any of the parameters are invalid.
 */

const paramValidatorsPath = '../../../exceptions/parameterValidators';
const validateAmountHandling = require(paramValidatorsPath).validateAmount;
// Validate the parameters needed for the ratePerPeriod function
const validateParamsHandling = require('./ratePerPeriod').validateParams;

function validateLoanParams(rate: number, amount: number, periods: number,  allowZero: boolean = true, logging: boolean = false): void{
    validateParamsHandling(rate, periods, allowZero, logging);
    validateAmountHandling(amount, logging);
}

/**
 * Calculates the monthly payment for a loan in the simplest case.
 * Uses the formula: P = r * A / (1 - (1 + r)^-n) where:
 * - P is the monthly payment, and is the value to be calculated.
 * - r is the monthly interest rate.
 * - A is the loan amount.
 * - n is the number of payments.
 * 
 * @param {number} rate - The monthly interest rate.
 * @param {number} amount - The loan amount.
 * @param {number} periods - The number of payments.
 * @param {boolean} [allowZero=true] - True if zero interest rates are allowed.
 * @returns {number} The monthly payment.
 * 
 * @example
 * loanPayments(0.01, 5000, 12) = 444.24
 *
 * @note 
 * Parameters are validated -- they must all be positive and 
 * the number of payments must be an integer.
 * 
 * @see {@link https://financeformulas.net/Loan_Payment_Formula.html#calcHeader} 
 * to compare with third-party results
 */

function loanPayments(rate: number, amount: number, periods: number, allowZero: boolean = true): number{
    // Validate the parameters
    validateLoanParams(rate, amount, periods, allowZero);
    // Calculate the monthly payment using standard formula as adjusted in case the rate is zero
    const result = rate > 0 ? rate * amount / (1 - (1 + rate) ** -periods) : amount / periods;
    // Return the result, rounded to two decimal places
    return parseFloat(result.toFixed(2));
}
module.exports.loanPayments = loanPayments;