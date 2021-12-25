import { useQuery } from "react-query";

import { getCategories } from "../api";

export const useArticles = () => {
  const { data: categories, isLoading } = useQuery("categories", getCategories);

  return { categories, isLoading };
};
