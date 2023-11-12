export type UserModelAttributes = {
  id?: number;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  confirmPassword: string;
};
