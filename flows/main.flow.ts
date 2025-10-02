import { ErrorCodes } from './error.type';
import { ResCodes } from './res.type';
//This part is a exception of the Clean Architecture, used as a dynamic part of the application

export type BaseFlow<T = unknown> = {
  success: boolean;
  type: ErrorCodes | ResCodes ;
  message?: string | null;
  data?: T ;
  timestamp?: number;
  meta?: Record<string, unknown>;
  // meta?: Record<string, any>;
};
