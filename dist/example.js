"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("./errors");
const validations_1 = require("./validations");
const errorHandler = () => {
    const username = '';
    const age = 31;
    const email = undefined;
    try {
        (0, validations_1.validateUser)({ username, age, email });
    }
    catch (error) {
        if (error instanceof errors_1.ConnectionError) {
            // Retry after a few seconds
            setTimeout(() => {
                (0, validations_1.validateUser)({ username, age, email });
            }, 3000);
        }
        if (error instanceof errors_1.ValidationError) {
            // show UI Error
        }
    }
};
exports.errorHandler = errorHandler;
