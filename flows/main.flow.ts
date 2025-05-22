import { ErrorCodes } from "./error.codes"
import { ResCodes } from "./res.codes"
//This part is a exception of the Clean Architecture, used as a dynamic part of the application
import { ErrorAppCodes } from "src/types"

export type BaseFlow<T = any> = {
    success: boolean,
    type: ErrorCodes | ResCodes | ErrorAppCodes, 
    message: string | undefined | null,
    data?: T | T[],
    timestamp?: number,
    meta?: Record<string,any>
}