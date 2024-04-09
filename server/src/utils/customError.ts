import { HttpStatusCode } from "../models/httpStatusCode";

abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;

class NotFoundError extends CustomError {
  statusCode = HttpStatusCode.NOT_FOUND;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serialize(): { message: string } {
    return { message: this.message };
  }
}

export { NotFoundError, AuthenticationError };

class AuthenticationError extends CustomError {
  statusCode = HttpStatusCode.UnAUTHORIZED;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }

  serialize(): { message: string } {
    return { message: this.message };
  }
}
