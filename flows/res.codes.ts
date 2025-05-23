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


export interface ResFlow<T = any> extends BaseFlow<T>{
    // module: EntitiesCodes -> es muy redundante ya que REST API (endpoints) ya hace saber el module
}