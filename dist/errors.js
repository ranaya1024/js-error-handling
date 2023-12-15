"use strict";
/**const createErrorFactory = function (errorName: string) {
  return class BusinessError extends Error {
    constructor(message: string) {
      super(message);
      this.name = errorName;
    }
  };
};

export const ConnectionError = createErrorFactory('ConnectionError');
export const ValidationError = createErrorFactory('ValidationError');**/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionError = exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        // Overwrite stack so it shows empty stack trace
        // this.stack = '';
    }
}
exports.ValidationError = ValidationError;
class ConnectionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ConnectionError';
    }
}
exports.ConnectionError = ConnectionError;
