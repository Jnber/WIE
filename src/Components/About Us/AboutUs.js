import  React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pic1 from '../../Images/1.jpg';
import Pic2 from '../../Images/2.jpg';
import Pic3 from '../../Images/3.jpg';
import Balade from '../../Images/Balade04.png'
import Carousel1 from '../Frequently Used/Carousel'
import thumbnail1 from '../../Images/1.png';
import thumbnail2 from '../../Images/2.png';
import thumbnail3 from '../../Images/3.png';
import thumbnail4 from '../../Images/4.png';
import thumbnail5 from '../../Images/5.png';
import thumbnail6 from '../../Images/6.png';
import thumbnail7 from '../../Images/7.png';
import thumbnail8 from '../../Images/8.png';
import './AboutUs.css';



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
        fontFamily:"Inter",
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
    },
    
}));

const tileData = [
       {
         image: thumbnail6,
         Name: 'Aya Jaidi',
         Post: 'Chairwoman',
         desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
         
       },
       {
        image: thumbnail5,
        Name: 'Nawel Bouaziz',
        Post: 'Vice Chairwoman',
        desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
         
      },
      {
        image: thumbnail4,
        Name: 'Maissa El Gharbi',
        Post: 'Treasurer/Sponsoring Manager',
        desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
         
        
      },
      {
       image: thumbnail3,
       Name: 'Tiba Ouerfelli',
       Post: 'General Secretary',
       desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
         
     },
      
     {
        image: thumbnail2,
        Name: 'Essia Ben Hamida',
        Post: 'Webmaster',
        desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
         
        
      },
      {
       image: thumbnail8,
       Name: 'Manel Reguima' ,
       Post: 'Human Ressources Manager',
       desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
         

     },
      
     {
        image: thumbnail1,
        Name: 'Chaima Soui',
        Post: 'Training Manager',
        desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
         
        
      },
      {
       image: thumbnail7,
       Name: 'Oumaima Kboubi',
       Post: 'Media/Communication Manager',
       desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
         
     },
      
     ];


export default function AboutUs (){
    const classes = useStyles();
    return(
        <div className={classes.AboutUs}>
            <h1 className={classes.Title}><b>W</b>omen <b>I</b>n <b>E</b>ngineering</h1>
            <h1 className={classes.IEEE}>Student Branch<br></br>IEEE INSAT </h1>
            <div className="cssgrid">
                <div className="item1">
                    <img src={thumbnail6} className={classes.Pictures}></img>
                </div>
                <div className="item2">
                <img src={Pic3} className={classes.Pictures}></img>
                </div>
                <div className="item3">
                <img src={thumbnail7} className={classes.Pictures}></img>
                </div>
                <div className="item4">
                <img src={Pic3} className={classes.Pictures}></img>
                </div>
                
            </div>
        <Grid className={classes.Container} container>
            <Grid item md={4}>
                <h1 className={classes.Story}>Our story</h1>
                <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
            </Grid>   
             
        </Grid>
        <Grid container md={10} className={classes.team}>
                <h1 className={classes.Title}> Our Team</h1>
                <Carousel1 tileData={tileData}></Carousel1>
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