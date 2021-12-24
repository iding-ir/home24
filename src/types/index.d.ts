import { SxProps, Theme } from "@mui/material/styles";

export interface IRoute {
  key: string;
  path: string;
  element: ReactElement<any, string | JSXElementConstructor<any>>;
  title?: string;
}

export interface IRoutes {
  [key: string]: IRoute;
}

export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory[];
};

export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};

export type ChildCategory = {
  name: string;
  urlPath: string;
};

export type Prices = {
  currency: string;
  regular: {
    value: number;
  };
};

export type Image = {
  path: string;
};

export type CategoryArticle = {
  articles: Article[];
};

export interface Styles {
  [key: string]: SxProps<Theme>;
}
