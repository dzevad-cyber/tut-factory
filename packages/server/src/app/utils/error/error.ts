class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly status: AppErrorStatus;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;

// success - if the request was successful
// fail - if the request failed but you handled the error
// error - if the request failed and you didn't handle the error
export type AppErrorStatus = 'success' | 'fail' | 'error';
