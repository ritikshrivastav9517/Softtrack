// utils/ApiError.js
class ApiError extends Error {
  constructor(statusCode, message = "Internal Server Error", errors = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.errors = errors;
    this.success = false;
  }
}

export {ApiError}; 
