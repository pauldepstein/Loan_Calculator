"use strict";
// Purpose: ad hoc testing of the parameter validation functions in the exceptions folder.
Object.defineProperty(exports, "__esModule", { value: true });
var parameterValidators_1 = require("../../exceptions/parameterValidators");
var validationError_1 = require("../../exceptions/validationError");
// Interest rate tests
try {
    console.log('Testing valid interest rate:');
    (0, parameterValidators_1.validateInterestRate)(5);
    console.log('Valid rate passed successfully!');
    console.log('Testing negative interest rate:');
    (0, parameterValidators_1.validateInterestRate)(-1);
}
catch (error) {
    if (error instanceof validationError_1.ValidationError) {
        console.log("Caught expected error: ".concat(error.message));
    }
    else {
        console.log("Unexpected error: ".concat(error));
        console.log(typeof error);
    }
}
try {
    console.log('Testing zero interest rate (not allowed):');
    (0, parameterValidators_1.validateInterestRate)(0, false, false);
}
catch (error) {
    if (error instanceof validationError_1.ValidationError) {
        console.log("Caught expected error: ".concat(error.message));
    }
    else {
        console.log("Unexpected error: ".concat(error));
    }
}
try {
    console.log('Testing zero interest rate (allowed):');
    (0, parameterValidators_1.validateInterestRate)(0, false, true);
    console.log('Zero interest rate passed!');
}
catch (error) {
    console.log("Unexpected error: ".concat(error));
}
