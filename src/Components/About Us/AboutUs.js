import  React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pic1 from '../../Images/1.jpg';
import Pic2 from '../../Images/2.jpg';
import Pic3 from '../../Images/3.jpg';
import Balade from '../../Images/Balade04.png'
import Carousel from '../Frequently Used/Carousel'
import thumbnail1 from '../../Images/1.png';
import thumbnail2 from '../../Images/2.png';
import thumbnail3 from '../../Images/3.png';
import thumbnail4 from '../../Images/4.png';
import thumbnail5 from '../../Images/5.png';
import thumbnail6 from '../../Images/6.png';
import thumbnail7 from '../../Images/7.png';
import thumbnail8 from '../../Images/8.png';



const useStyles = makeStyles((theme) => ({
   
    Container:{
        backgroundImage:'url('+Balade+')',
        justifyContent:"center",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundRepeat:'no-repeat',
        height: "70em",
        alignContent:"space-between",
        backgroundPosition:"bottom"
        

    },
    Story:{
        fontSize:"xx-large",
        marginBottom:"2em",
        fontFamily:"Crimson Text",
        fontWeight:"bold"
    },
    Title:{
        color:"#11111",
        margin: "1em 0em 0em",
        fontFamily:"Crimson Text",
        fontWeight:"bold"
    },
    AboutUs:{
       textAlign:"center"
    },
    IEEE:{
        color:"#43cac3",
        marginBottom: "1em",
        fontFamily:"Crimson Text",
        fontWeight:"bold",
    },
    Pictures:{
        width:"100%"
    },
    frame:{
        marginBottom:"5em",
        marginLeft:"0em",
        justifyContent:"center"
    },
    Values:{
        padding:"3em"
    },
    paragraph:{
        fontFamily: 'Inter',
    },
    team:{
        display:"contents",
        textAlign:"left"
    },
    values:{
        width:"50%",
        alignItems: "center"
    },
    Values:{
       marginTop:"9em",
        alignItems: "center"
    }
}));

const tileData = [
       {
         image: thumbnail6,
         Name: 'Aya Jaidi',
         Post: 'Chairwoman',
         
       },
       {
        image: thumbnail5,
        Name: 'Nawel Bouaziz',
        Post: 'Vice Chairwoman',
      },
      {
        image: thumbnail4,
        Name: 'Maissa El Gharbi',
        Post: 'Treasurer/Sponsoring Manager',
        
      },
      {
       image: thumbnail3,
       Name: 'Tiba Ouerfelli',
       Post: 'General Secretary',
     },
      
     {
        image: thumbnail2,
        Name: 'Essia Ben Hamida',
        Post: 'Webmaster',
        
      },
      {
       image: thumbnail8,
       Name: 'Manel Reguima' ,
       Post: 'Human Ressources Manager',
     },
      
     {
        image: thumbnail1,
        Name: 'Chaima Soui',
        Post: 'Training Manager',
        
      },
      {
       image: thumbnail7,
       Name: 'Oumaima Kboubi',
       Post: 'Media/Communication Manager',
     },
      
     ];


export default function AboutUs (){
    const classes = useStyles();
    return(
        <div className={classes.AboutUs}>
            <h1 className={classes.Title}><b>W</b>omen <b>I</b>n <b>E</b>ngineering</h1>
            <h1 className={classes.IEEE}>Student Branch<br></br>IEEE INSAT </h1>
            <Grid container className={classes.frame} spacing={4}>
                <Grid item md={3}>
                    <img src={Pic1} className={classes.Pictures}></img>
                </Grid>
                <Grid item md={3}>
                    <img src={Pic2} className={classes.Pictures}></img>
                </Grid>
                <Grid item md={3}>
                    <img src={Pic3} className={classes.Pictures}></img>
                </Grid>
               
            </Grid>
        <Grid className={classes.Container} container>
            <Grid item md={4}>
                <h1 className={classes.Story}>Our story</h1>
                <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
            </Grid>   
             
        </Grid>
        <Grid container md={10} className={classes.team}>
                <h1 className={classes.Title}> Our Team</h1>
                <Carousel tileData={tileData}></Carousel>
            </Grid>
        <Grid container className={classes.Values}>
            <Grid item md={4}>
                <h1 className={classes.IEEE}> Our values</h1>
            </Grid>
            <Grid item md={7}>
                <Grid container>
                    <Grid item md={5}> 
                        <img src={thumbnail6} className={classes.values}></img>
                    </Grid>
                    <Grid itme md={5}>
                        <h1 className={classes.Story}>Commitment</h1>
                        <p className={classes.paragraph}>, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  <br></br> _________________________________________</p>
                    </Grid>
                    <hr ></hr>
                    <Grid item md={5}> 
                        <img src={thumbnail6} className={classes.values}></img>
                    </Grid>
                    <Grid itme md={5}>
                        <h1 className={classes.Story}>Commitment</h1>
                        <p className={classes.paragraph}>, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br></br> _________________________________________</p>
                    </Grid>
                    <hr></hr>
                    <Grid item md={5}> 
                        <img src={thumbnail6} className={classes.values}></img>
                    </Grid>
                    <Grid itme md={5}>
                        <h1 className={classes.Story}>Commitment</h1>
                        <p className={classes.paragraph}>, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    );
}