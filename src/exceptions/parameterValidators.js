"use strict";
/**
 * @file Functions for parameter validations.
 *
 * This file provides utility functions for checking that parameters
 * make sense. For example, interest rates should be non-negative,
 * and the number of periods should be integral and positive.
 *
 * @author Paul Epstein
 * @version 1.0.0
 * @date 2025-01-12
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInterestRate = validateInterestRate;
var errorMessages_1 = require("./errorMessages");
var validationError_1 = require("./validationError");
var errorStringHandling_1 = require("./errorStringHandling");
/**
 * Validates an interest rate.
 * Negative interest rates are not allowed. Zero interest rates are allowed by default
 * but can be disallowed via a parameter.
 *
 * @param {number} rate - The interest rate to validate.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * @param {boolean} [allowZero=true] - True if zero interest rates are allowed.
 *
 * @throws {ValidationError} If the interest rate is negative or zero when disallowed.
 *
 * @example
 * validateInterestRate(5); // Valid
 * validateInterestRate(-1); // Throws ValidationError
 * validateInterestRate(0, false, false); // Throws ValidationError
 */
function validateInterestRate(rate, logging, allowZero) {
    if (logging === void 0) { logging = false; }
    if (allowZero === void 0) { allowZero = true; }
    var PARAM_NAME = "interest rate";
    var isZeroCase = rate === 0 && !allowZero;
    var errorMessage = isZeroCase
        ? errorMessages_1.ERROR_MESSAGES.UNEXPECTED_NON_POSITIVE
        : errorMessages_1.ERROR_MESSAGES.UNEXPECTED_NEGATIVE;
    var displayMessage = (0, errorStringHandling_1.displayError)(PARAM_NAME, errorMessage);
    if (rate < 0 || isZeroCase) {
        throw new validationError_1.ValidationError(displayMessage, logging);
    }
}
