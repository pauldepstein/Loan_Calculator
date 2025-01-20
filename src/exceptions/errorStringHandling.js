"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayError = displayError;
/**
 * Returns the error message for invalid input
 * @param {string} errorParam -- the parameter that caused the error
 * @param {string} errorMessage -- the error message for the parameter
 * @returns {string} -- the final error message
 */
function displayError(errorParam, errorMessage) {
    var ERROR_INDICATOR = "Error: ";
    var errorString = "".concat(ERROR_INDICATOR).concat(errorParam, ": \n").concat(errorMessage);
    return errorString;
}
