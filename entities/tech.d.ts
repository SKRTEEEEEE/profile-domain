import { DBBase } from '@/dynamic.types.js';
import { IntlBase } from './intl.type.js';
import { TechFormCategory } from './tech.type.js';

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
  librerias?: LibBase[];
};

type LengBase = TechBase & {
  frameworks?: FwBase[];
};
type Fw = TechBase & DBBase & {
  librerias?: (LibBase&DBBase)[];
}
type Leng = TechBase & DBBase & {
  frameworks?: Fw[];
}


type TechForm = {
  lengTo?: string;
  fwTo?: string;
  category: TechFormCategory;
} & TechBase;

type FullTechData = TechBase & {
  valueAfin: string;
  valueExp: string;
  isFw?: string;
  isLib?: string;
  valueUso: string;
};
type ReadAllFlattenTechsRes = {
  techs: (LengBase & DBBase)[];
  flattenTechs: FullTechData[];
  dispoFw: { name: string }[];
  dispoLeng: { name: string }[];
};
