import { ErrorCodes } from "./error.codes"
import { ResCodes } from "./res.codes"

export type BaseFlow<T = any> = {
    success: boolean,
    type: ErrorCodes | ResCodes, // enumerator will be ResponseCodes
    message: string | undefined | null,
    data?: T | T[],
    timestamp?: number,
    meta?: Record<string,any>
}