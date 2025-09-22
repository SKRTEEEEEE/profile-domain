import { IntlBase, IntlKey } from "../entities/intl.type"

export enum ErrorCodes {
    DATABASE_ACTION = "DATABASE_ACTION",
    DATABASE_FIND = "DATABASE_FIND",
    INPUT_PARSE = "INPUT_PARSE",
    SET_ENV = "SET_ENV",
    THROTTLE = "THROTTLE",

    UNAUTHORIZED_ACTION = "UNAUTHORIZED_ACTION",

    NOT_IMPLEMENTED = "NOT_IMPLEMENTED",
    SHARED_ACTION = "SHARED_ACTION"
}

export type ErrorCodesMetadata = {
  emoji: string
  family: "Endpoint" | "Internal" | "Future"
  desc: string
  friendlyDesc: string
  code: number

}
export type ErrorMeta = {
  shortDesc?: string
  desc?: Record<IntlKey, string>
  [key: string]: unknown
}

export type DomainErrorBase = {
  readonly location: Function
  readonly func: string
  readonly friendlyDesc?: IntlBase,
  meta?: ErrorMeta
}
export const ERROR_CODES_METADATA: Record<ErrorCodes, ErrorCodesMetadata> = {
    [ErrorCodes.DATABASE_ACTION]: {
      emoji: '🧨',
      family: "Internal",
      desc: "Something went wrong while saving the data",
      friendlyDesc: "Please try again after",
      code: 500
    },
    [ErrorCodes.DATABASE_FIND]: {
      emoji: '🔍',
      family: "Endpoint",
      desc: "Something went wrong",
      friendlyDesc: "Sorry, we couldn't locate that content",
      code: 404
    },
    [ErrorCodes.INPUT_PARSE]: {
      emoji: '✏️',
      family: "Endpoint",
      desc: "Your request is in an incorrect format",
      friendlyDesc: "Please verify the information and try again",
      code: 400
    },
    [ErrorCodes.UNAUTHORIZED_ACTION]: {
      emoji: '🔐',
      family: "Endpoint",
      desc: "You do not have permission to perform this action",
      friendlyDesc: "Verify your credentials and try again",
      code: 401
    },
    [ErrorCodes.THROTTLE]: {
      emoji: '⏱️',
      family: "Endpoint",
      desc: "Too many requests, please slow down",
      friendlyDesc: "Please wait a moment before trying again",
      code: 429
    },
    [ErrorCodes.SET_ENV]: {
      emoji: '⚙️',
      family: "Internal",
      desc: "Something went wrong while saving the data",
      friendlyDesc: "Please try again after",
      code: 500
    },
    [ErrorCodes.NOT_IMPLEMENTED]: {
      emoji: '🚧',
      family: "Future",
      desc: "This service is not available now",
      friendlyDesc: "Contact us for more info",
      code: 501
    },
    [ErrorCodes.SHARED_ACTION]: {
      emoji: '🖲️',
      family: "Internal",
      desc: "Sorry, something went wrong",
      friendlyDesc: "Contact us if persist",
      code: 502
    }
}
export const apiErrorCodes = {
    enum: ErrorCodes,
    enumName: "ErrorCodes",
    description: "The response type in some app action",
    title: "Error Codes",
    example: ErrorCodes.NOT_IMPLEMENTED
}
//429 - Too Many Requests