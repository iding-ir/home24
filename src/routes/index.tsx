import { IRoutes } from "../types";
import * as URLS from "../constants/urls";
import Home from "../components/ArticleList/ArticleList";
import NotFound from "../components/NotFound/NotFound";

export const routes: IRoutes = {
  home: {
    key: "home",
    path: URLS.HOME,
    element: <Home />,
    title: "Pages.home",
  },
  notFound: {
    key: "notFound",
    path: URLS.NOT_FOUND,
    element: <NotFound />,
    title: "Pages.notFound",
  },
};
