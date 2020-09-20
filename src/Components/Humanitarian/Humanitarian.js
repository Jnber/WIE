import React from "react";
import image from "../../Images/1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import ManyArticles from "../Frequently Used/manyArticles";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Accessibility, LockOutlined } from "@material-ui/icons";

const events = [
  {
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
  },
  {
    titlee: "Pink October",
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
  },
  {
    titlee: "WIE Orientate",
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
  },
  {
    titlee: "She Solves",
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
  },
];
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    padding: "1em",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,25%)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#662992",
    color: "white",
  },
}));

export default function Humanitarian() {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>
        Humanitarian work is something everyone should experience
      </h1>
      <ManyArticles events={events}></ManyArticles>
      <h3 className={classes.title}>To help us or volunteer</h3>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Accessibility />
          </Avatar>
          <h3 className={classes.title}>Fill the form bellow</h3>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Tell us what you want to do"
                  label="Tell us what you want to do"
                  type="Text"
                  id="Text"
                  rowsMax={4}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Volunteer
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
