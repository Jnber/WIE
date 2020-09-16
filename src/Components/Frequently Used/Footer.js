import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import logo from '../../Images/LogoColor.png'

function Copyright() {
  return (
    <Typography variant="body2" color={"secondary"}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        wie.ieee.org 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: "#5a0074",
    textAlign: "center"
  },
  Logo: {
    width: "10%"
  },
  text:{
    color:"white",
    fontFamily: "inter"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
   
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <img src={logo} className={classes.Logo}></img>
          <Typography variant="body1" className={classes.text}>IEEE INSAT WIE Chapter</Typography>
          <Copyright className={classes.text} />
        </Container>
      </footer>
  
  );
}