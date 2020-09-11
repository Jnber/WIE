

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      marginTop:"2em"
    },
    media: {
        paddingTop: '100%', // 16:9
        
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width:"90%",
       
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

export default function Carousel(props) {
  const classes = useStyles();
  const { tileData } = props;
  return (
    <Grid container className={classes.root} spacing={1}>
              <CssBaseline />

    
      {tileData.map((tile) => (  
        <Grid item md={3} sm={6} xs={12}>    
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
        </Card>
        </Grid>
      ))}
    
  </Grid>
  );
}