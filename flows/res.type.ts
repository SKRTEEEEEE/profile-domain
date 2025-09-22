import { ErrorAppCodes } from "src/dynamic.types";
import { ErrorCodes } from "./error.type";
import { BaseFlow } from "./main.flow";

// export enum EntitiesCodes  { 
//     TECH = "TechBase",
//     PRE_TECH = "PreTechBase", 
//     USER = "UserBase", 
//     ROLE = "RoleBase", 
//     PROJECT = "ProjectBase" }
export enum ResCodes {
    ENTITY_CREATED = "ENTITY_CREATED",
    ENTITY_UPDATED = "ENTITY_UPDATED",
    ENTITY_DELETED = "ENTITY_DELETED",
    ENTITY_FOUND = "ENTITY_FOUND",
    ENTITIES_FOUND = "ENTITIES_FOUND",
    OPERATION_SUCCESS = "OPERATION_SUCCESS" 
}

type ResMeta = {
    friendlyDesc?: string
    [key: string]: string | number | boolean | undefined | null
  }

export type  ResFlow<T = any> = {
    success: boolean;
    type: ErrorCodes | ResCodes | ErrorAppCodes;
    message?: string | null;
    data?: T | T[];
    timestamp?: number;
    meta?: ResMeta  
}

export const apiResCodes = {
    enum: ResCodes,
    enumName: "ResCodes",
    description: "The response type in some app action",
    title: "Res Codes",
    example: ResCodes.OPERATION_SUCCESS
}