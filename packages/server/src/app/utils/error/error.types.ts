export type ErrorProps = {
  status: 'fail' | 'error';
  statusCode: number;
  message: string;
  stack: string;
  error: any;
  isOperational?: boolean;
};
