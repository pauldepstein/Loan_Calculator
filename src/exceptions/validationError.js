"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
/**
 * ValidationError class that extends the built-in Error class.
 *
 * This class provides an error with conditional logging to the console.
 */
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    /**
     * Creates an instance of ValidationError.
     *
     * @param message - The error message.
     * @param logging [logging=false] - A boolean flag indicating whether the error should be logged.
     */
    function ValidationError(message, logging) {
        if (logging === void 0) { logging = false; }
        var _this = _super.call(this, message) || this;
        _this.name = "ValidationError";
        _this.logging = logging;
        // Log to console if not using a browser
        if (_this.logging) {
            console.error(_this.toString());
        }
        return _this;
    }
    /**
     * Returns a string representation of the error.
     *
     * @returns A string containing the name and message of the error.
     */
    ValidationError.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this.message);
    };
    return ValidationError;
}(Error));
exports.ValidationError = ValidationError;
