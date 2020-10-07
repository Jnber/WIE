import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Girl from "../Images/Girl.webp";
import Fond from "../Images/Fond.png";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundImage: `url(${Fond})`,
    backgroundSize: "cover",
    justifyItems: "center",
    //backgroundColor: "rgb(90, 0, 110)",
    color: theme.palette.common.white,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
    marginBottom: "5em",
    display: "grid",
    gridGap: "1em",
    alignItems: "center",
    /*grid-template-columns: auto auto auto auto;*/
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    minHeight: "80vh",
  },
  Desc: {
    //textAlign: "justify",
    fontSize: "medium",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  Title: {
    color: "#e8667b",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      zIndex: 9,
    },
  },

  hello: {
    width: "70%",
  },

  girl: {
    padding: "0em",
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <div className={classes.mainFeaturedPost}>
      {/* Increase the priority of the hero background image */}

      <div className={classes.mainFeaturedPostContent}>
        <h1
          component="h1"
          variant="h3"
          color="inherit"
          className={classes.Title}
        >
          {post.title}
        </h1>
        <p variant="h5" color="inherit" className={classes.Desc}>
          {post.description}
        </p>
      </div>

      <img src={Girl} alt="girlthinking" className={classes.hello}></img>
    </div>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
