import { IntlBase } from "./intl.type";
import { MongooseBase, MongooseTimestamps } from "@/core/infrastructure/mongoose/types";
import { LucideIconNames } from "@/dynamic.types";
enum TypeProject {
    Frontend = "frontend",
    Backend = "backend",
    Blockchain = "blockchain",
    Database = "database",
    DevOps = "devops",
    Design = "design",
    Other = "other"
  }
type TechProject = {
    nameId: string;
    nameBadge: string;
    img: null|string;
    web: string;
    desc: IntlBase;
    type: TypeProject[];
    typeDesc: IntlBase;
    version: string|null;
}

type TimeProject = {
    title: IntlBase;
    date: string;
    desc: IntlBase;
    type: TypeProject[];
    techs: string[]; // Referencia a los IDs de TechProject
}

type KeyProject = {
    icon: {
        iconName: LucideIconNames;
        className: string;
    };
    title: IntlBase;
    desc: IntlBase;
}

type ProjectBase = {
    nameId: string;
    openSource: null|string;
    operative: null|string;
    ejemplo: boolean;
    image: null|string;
    icon: LucideIconNames;
    title: IntlBase;
    desc: IntlBase;
    lilDesc: IntlBase;
    time: TimeProject[];
    keys: KeyProject[];
    techs: TechProject[];
}
// type ProjectDocument = ProjectBase & MongooseTimestamps & Document;
type Project<TDBBase> = ProjectBase & TDBBase;