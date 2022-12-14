import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function LocationCard({location}) {
  return (
    <Card sx={{ minWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/dummy-image.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {location}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
