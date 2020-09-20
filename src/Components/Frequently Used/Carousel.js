import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, CardContent, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';




const useStyles = makeStyles((theme) => ({
    root: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      marginTop:"2em",
      display: "grid",
      gridGap : "1em",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    },
    media: {
        paddingTop: '100%', // 16:9
        
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width:"100%",
       
      },
   
  }));



/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function Carousel1(props) {
  const classes = useStyles();
  const { tileData } = props;
  return (
    <div  className={classes.root} >
              <CssBaseline />

    
      {tileData.map((tile) => (  
          
        <Card className={classes.card}>
            <CardHeader
            title={tile.Name}
            subheader={tile.Post}
            />
        <CardMedia
            className={classes.media}
            image={tile.image}
            title={tile.Name}
        />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" >
          {tile.desc}
        </Typography>
      </CardContent>
        </Card>
      
      ))}
    
  </div>
  );
}