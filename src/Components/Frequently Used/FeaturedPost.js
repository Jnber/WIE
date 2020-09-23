import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  card: {
    display: "flex",
    margin: "1em",
  },
  cardDetails: {
    flex: 1,
  },
  Title: {
    textAlign: "center",
    color: "purple",
  },
  Desc: {
    margin: "2em",
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={12} spacing={4}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                className={classes.Title}
              >
                {post.title}
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                className={classes.Desc}
              >
                {post.description}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
