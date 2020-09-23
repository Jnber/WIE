import React from "react";
import image from "../Images/1.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  articleframe: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    padding: "2em",
    flexDirection: "column",
  },
  articlename: {
    color: "#9627a8",
    marginBottom: "0.5em",
    fontSize: "xxx-large",
  },
  grid: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "2em",
    display: "grid",
    gridGap: "1em",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  },
  articleimage: {
    width: "25em",
    margin: "1em",
  },
  articlesaying: {
    fontSize: "xx-large",
    color: "#43cac3",
    alignSelf: "center",
  },
  articleparagraph: {
    width: "75%",
    color: "rgba(0,0,0,1)",
    textAlign: "justify",
  },
  container: {
    width: "75%",
  },
  paragraph: {
    textAlign: "justify",
  },
}));

const art = {
  titlee: "Star Program",
  img: image,
  state: "done",
  desc:
    "Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.",
  paragraph1:
    "I've been using React.js for about 6 months now. In the grand scheme of things that's not very long at all, but in the ever-churning world of JavaScript frameworks, that just about qualifies you as a bearded elder!I've helped out a few people lately with React starter tips, so I thought it would be a good idea to write some of them up here to share more broadly. These are all either things that I wish I'd known when I started out, or things that really helped me 'get' React. I'm going to assume that you know the absolute basics; if the words component, props, or state are unfamiliar to you, then you might want to read the official Getting started or Tutorial pages.",
  paragraph2:
    "I've been using React.js for about 6 months now. In the grand scheme of things that's not very long at all, but in the ever-churning world of JavaScript frameworks, that just about qualifies you as a bearded elder!I've helped out a few people lately with React starter tips, so I thought it would be a good idea to write some of them up here to share more broadly. These are all either things that I wish I'd known when I started out, or things that really helped me 'get' React. I'm going to assume that you know the absolute basics; if the words component, props, or state are unfamiliar to you, then you might want to read the official Getting started or Tutorial pages.",
  paragraph3:
    "I've been using React.js for about 6 months now. In the grand scheme of things that's not very long at all, but in the ever-churning world of JavaScript frameworks, that just about qualifies you as a bearded elder!I've helped out a few people lately with React starter tips, so I thought it would be a good idea to write some of them up here to share more broadly. These are all either things that I wish I'd known when I started out, or things that really helped me 'get' React. I'm going to assume that you know the absolute basics; if the words component, props, or state are unfamiliar to you, then you might want to read the official Getting started or Tutorial pages.",
  saying: "Hey Hey We did it",
};

export default function Article(props) {
  const classes = useStyles();
  //const { art } = props;
  return (
    <article className={classes.articleframe}>
      <h1 className={classes.articlename}>{art.titlee}</h1>
      <div className={classes.container}>
        <div className={classes.grid}>
          <img
            src={art.img}
            className={classes.articleimage}
            alt="coucou"
          ></img>
          <h5 className={classes.articlesaying}>{art.saying}</h5>
        </div>
      </div>
      <p className={classes.articleparagraph}>{art.paragraph1}</p>
      <div className={classes.container}>
        <div className={classes.grid}>
          <p className={classes.paragraph}>{art.paragraph2}</p>
          <img src={art.img} alt="alo" className={classes.articleimage}></img>
        </div>
      </div>
      <p className={classes.articleparagraph}>{art.paragraph3}</p>
    </article>
  );
}
