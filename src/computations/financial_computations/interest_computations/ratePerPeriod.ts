/**
 * A utility function to validate the parameters of the ratePerPeriod function.
 * @param {number} rate - The yearly interest rate.
 * @param {number} periods - The number of periods per year.
 * @param {boolean} [allowZero=true] - True if zero interest rates are allowed.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * @throws {ValidationError} - If any of the parameters are invalid.
 */

const paramPath = '../../../exceptions/parameterValidators';
const validateInterestRateHandler = require(paramPath).validateInterestRate;
const validateNumPeriodsHandler = require(paramPath).validateNumPeriods;

function validateParams(rate: number, periods: number, allowZero: boolean = true, logging: boolean = false): void{
    validateInterestRateHandler(rate, allowZero, logging);
    validateNumPeriodsHandler(periods, logging);   
}
module.exports.validateParams = validateParams;


/**
 * Function to calculate the rate per period, given the annual interest rate and the number of periods per year.
 * 
 * @param {number} annualRate - Annual interest rate.
 * @param {number} [periods=12] - Number of periods per year.
 * @param {boolean} [allowZero=true] - True if zero interest rates are allowed.
 * @returns {number} The rate per period.
 * 
 * @example
 * ratesPerPeriod(0.05, 12);  // 0.004074
 * 
 */

// Export the constant for the number of months per year
const constantsPath = '../../../constants';
const MONTHLY = require(constantsPath).MONTHS_IN_YEAR;

function ratesPerPeriod(annualRate: number, periods: number = MONTHLY, allowZero: boolean = true): number{
    validateParams(annualRate, periods, allowZero);
    const result = (1 + annualRate) ** (1 / periods) - 1;
    return parseFloat(result.toPrecision(4));
}
module.exports.ratesPerPeriod = ratesPerPeriod;