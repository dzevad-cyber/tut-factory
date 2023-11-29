export type UserModelAttributes = {
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
  id: number;
  lastName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  changedPasswordAt?: Date;
};
