import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Logo from '../../Images/LogoColor.png'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
 logo:{
    width: '6em',
 },
 Name:{
    color: 'white',
    fontWeight: 'bold',
    margin: '1em'
 },
 footer: {
     backgroundColor: '#471256'
 },
 link:{
     color:'white'
 },
 contain: {
     padding: '2em',
     justifyContent: 'space-between'
 },
 facebook: {
     color:'white',
     margin:'0.2em',
     marginLeft: '0em'
 },
 instagram: {
     color: 'white',
     margin:'0.2em'
 }
});

export default function Footer() {
    const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Grid container className={classes.contain}>
            <Grid item md={2} sm={2} xs={12}>
                <img src={Logo} className={classes.logo}></img>
                <Typography className={classes.Name}>WIE IEEE INSAT</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={12}>
                <Typography className={classes.Name}>Branch</Typography>
                <Typography>
                <Link className={classes.link}>About Us</Link>
                </Typography>
                <Typography>
                <Link className={classes.link}>Members</Link>
                </Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={12}>
                <Typography className={classes.Name}>Others</Typography>
                <Typography>
                <Link className={classes.link}>Activities</Link>
                </Typography>
                <Typography>
                <Link className={classes.link}>Humanitarian</Link>
                </Typography>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
                <Typography className={classes.Name}>Contact</Typography>
                <Typography className={classes.link}>
                    Addresse: INSAT
                </Typography>
                <Typography className={classes.link}>
                    Phone Number: 45 521 145
                </Typography>
                <Typography className={classes.link}>
                    E-mail: wie@ieee.com
                </Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={12}>
            <Typography className={classes.Name}>
                    Follow Us
            </Typography>
            <FacebookIcon className={classes.facebook} fontSize="large"></FacebookIcon>
            <InstagramIcon className={classes.instagram} fontSize="large"></InstagramIcon>
            </Grid>
        </Grid>
     
    </footer>
  );
}



