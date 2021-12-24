import React from "react";

import { formatter } from "../../utils/formatter";
import { Article } from "../../types";

interface IArticleCard {
  article: Article;
}

const ArticleCard = (props: IArticleCard) => {
  const { article } = props;

  return (
    <div className={"article"}>
      <img src={article.images[0].path} alt={article.name} />

      <div>{article.name}</div>

      <div>{formatter().format(article.prices.regular.value / 100)}</div>

      <section role="button">Add to cart</section>
    </div>
  );
};

export default ArticleCard;
