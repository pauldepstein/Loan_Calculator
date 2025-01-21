// Calculate the interest rate per period

// Dependency
/// <reference path = "../../../constants.ts" />

namespace RatePerPeriod{
/**
 * Function to calculate the rate per period, given the annual interest rate and the number of periods per year.
 * 
 * @param {number} annualRate - Annual interest rate.
 * @param {number} [periods=12] - Number of periods per year.
 * @returns {number} The rate per period.
 * 
 * @example
 * ratesPerPeriod(0.05, 12);  // 0.004074
 * 
 */

export function ratesPerPeriod(annualRate: number, periods: number = Constants.MONTHS_IN_YEAR): number{
    const result = (1 + annualRate) ** (1 / periods) - 1;
    return parseFloat(result.toPrecision(4));
}
}