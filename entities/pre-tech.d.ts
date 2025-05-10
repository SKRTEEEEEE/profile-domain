// import { MongooseBase, MongooseDocument, MongooseTimestamps } from "@/core/infrastructure/mongoose/types";

type PreTechBase = {
    nameId: string;
    nameBadge: string;
    color: string;
    web: string;
}

//No se usa ⬇️
//export type PreTechDocument<TDBDocument, TDBTimestamps> = TDBDocument & TDBTimestamps & PreTechBase;
// export interface PreTechDocument extends PreTechBase, MongooseTimestamps, MongooseDocument{};

type PreTech<TDBBase> = TDBBase & PreTechBase; 
// export type PreTech = PreTechBase & MongooseBase;

