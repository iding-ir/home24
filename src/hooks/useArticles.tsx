import { createContext } from "react";
import { useQuery } from "react-query";

import { Category } from "../types";
import { getCategories } from "../api";

interface IArticlesContext {
  categories: Category[] | undefined;
  isLoading: boolean;
}

export const ArticlesContext = createContext<IArticlesContext>({
  categories: [],
  isLoading: false,
});

export const useArticles = () => {
  const { data: categories, isLoading } = useQuery("categories", getCategories);

  return { categories, isLoading };
};
