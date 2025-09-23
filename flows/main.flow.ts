import { ErrorCodes } from './error.type';
import { ResCodes } from './res.type';
//This part is a exception of the Clean Architecture, used as a dynamic part of the application
import { ErrorAppCodes } from 'src/dynamic.types';

export type BaseFlow<T = any> = {
  success: boolean;
  type: ErrorCodes | ResCodes | ErrorAppCodes;
  message?: string | null;
  data?: T | T[];
  timestamp?: number;
  meta?: Record<string, any>;
};
