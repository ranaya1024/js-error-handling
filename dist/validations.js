"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const errors_1 = require("./errors");
const validateUser = ({ username, age, email }) => {
    if (!username)
        throw new errors_1.ValidationError('name is required');
    if (!age)
        throw new errors_1.ValidationError('name is required');
    if (!email)
        throw new errors_1.ValidationError('name is required');
    // Calling db type error
    try {
        //mongodb.connect();
    }
    catch (error) {
        // Don't send infrastructure errors to the client
        // Send to a internal service ie sendBeaconError(e)
        throw new errors_1.ConnectionError('DB not available');
    }
};
exports.validateUser = validateUser;
