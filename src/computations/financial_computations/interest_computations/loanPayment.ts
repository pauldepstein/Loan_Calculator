// Dependencies
/// <reference path="ratePerPeriod.ts" />
/// <reference path = "../../../constants.ts" />

/**
 * @file Functions for calculating loan payments.
 * 
 * This file provides the mathematical functions for loan calculations.
 * These functions are used to create objects in the Loan class hierarchy.
 *
 * @author Paul Epstein
 * @version 1.0
 * @date 2025-01-18
 */

namespace LoanPayments{
/**
 @note Computations are actually per period where the period is arbitrary
 but the word "monthly" is used for simplicity.

 * Calculates the monthly payment for a loan in the simplest case.
 * Uses the formula: P = r * A / (1 - (1 + r)^-n) where:
 * - P is the monthly payment, and is the value to be calculated.
 * - r is the monthly interest rate.
 * - A is the loan amount.
 * - n is the number of payments.
 * 
 * Also uses the simpler formula A / n in the case of zero interest.
 * 
 * @param {number} rate - The monthly interest rate.
 * @param {number} amount - The loan amount.
 * @param {number} periods - The number of payments.
 * @returns {number} The monthly payment.
 * 
 * @example
 * loanPayments(0.01, 5000, 12) = 444.24
 * 
 * @see {@link https://financeformulas.net/Loan_Payment_Formula.html#calcHeader} 
 * to compare with third-party results
 */

export function loanPayments(rate: number, amount: number, periods: number): number{
    // Calculate the periodic payment using standard formula as adjusted in case the rate is zero
    var result = rate > 0 ? rate * amount / (1 - (1 + rate) ** -periods) : amount / periods;
    // Return the result, rounded to two decimal places
    return parseFloat(result.toFixed(2));
}

/**
 * Calculates the monthly payment for a loan in the case where annual interest rate is
 * given and the number of periods per year (typically monthly) is given.
 * Combines the ratesPerPeriod and loanPayments functions.
 * 
 * @param {number} rate - The annual interest rate.
 * @param {number} amount - The loan amount.
 * @param {number} periods - The total number of payments.
 * @param {number} [periodsPerYear=12] - The number of periods in a year.
 * @returns {number} The monthly payment.
 * 
 * @example
 * loanPaymentsMonthly(0.126825, 5000, 12) = 444.24
 *
 */

export function loanPaymentsMonthly(rate: number, amount: number, periods: number, periodsPerYear: number = Constants.MONTHS_IN_YEAR): number{
    // Calculate the rate per period
    const ratePerPeriod = RatePerPeriod.ratesPerPeriod(rate, periodsPerYear);
    // Calculate the per-period payment using the loanPayments function
    return loanPayments(ratePerPeriod, amount, periods);
}
}