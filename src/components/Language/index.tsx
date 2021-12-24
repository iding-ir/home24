import { ReactNode } from "react";

import { ReactComponent as IconEN } from "../../assets/images/icon-en.svg";
import { ReactComponent as IconES } from "../../assets/images/icon-es.svg";
import { ReactComponent as IconDE } from "../../assets/images/icon-de.svg";

export interface ILanguage {
  value: string;
  name: string;
  icon: ReactNode;
}

export interface ILanguages {
  [key: string]: ILanguage;
}

export const languages: ILanguages = {
  en: {
    value: "en",
    name: "Language.en",
    icon: <IconEN />,
  },
  es: {
    value: "es",
    name: "Language.es",
    icon: <IconES />,
  },
  de: {
    value: "de",
    name: "Language.de",
    icon: <IconDE />,
  },
};
