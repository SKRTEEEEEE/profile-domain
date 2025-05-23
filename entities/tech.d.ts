import { IntlBase } from "./intl.type.js";

type TechBase = {
  nameId: string;
  nameBadge: string;
  color: string;
  web: string;
  preferencia: number;
  experiencia: number;
  afinidad: number;
  img: string | null;
  desc: IntlBase;
  usoGithub: number;
};

type LibBase = TechBase;

type FwBase = TechBase & {
  librerias: LibBase[];
};

type LengBase = TechBase & {
  frameworks: FwBase[];
};

type TechForm = {
  lengTo?: string; 
  fwTo?: string; 
  category: "leng" | "fw" | "lib"; 
} & TechBase;

type FullTechData = TechBase &{
        valueAfin: string;
    valueExp: string;
    isFw?: string;
    isLib?: string;
    valueUso: string;
}
type ReadAllFlattenTechsRes<TDB> = {
    techs: (LengBase & TDB)[]
    flattenTechs: FullTechData[],
    dispoFw: {name:string}[]
    dispoLeng: {name:string}[]
}