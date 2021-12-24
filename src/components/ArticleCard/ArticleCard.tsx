import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { formatter } from "../../utils/formatter";
import { Article } from "../../types";
import { styles } from "./styles";

interface IArticleCard {
  article: Article;
}

const ArticleCard = (props: IArticleCard) => {
  const { article } = props;
  const { name, images, prices } = article;

  return (
    <Card sx={styles.Card}>
      <CardMedia
        component="img"
        height="140"
        image={images[0].path}
        alt={name}
      />

      <CardContent sx={styles.content}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {formatter().format(prices.regular.value / 100)}
        </Typography>
      </CardContent>

      <CardActions>
        <Button fullWidth size="small">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
