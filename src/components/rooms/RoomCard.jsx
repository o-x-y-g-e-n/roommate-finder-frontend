import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function RoomCard({ room }) {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/WxhGn1F/pexels-scott-webb-1029599.jpg"
          alt="green iguana"
        />
        <CardContent>
          <div
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: "100",
              textAlign: "left",
              color: "red",
            }}
          >
            {room.price} / month
          </div>
          <Typography gutterBottom variant="h5" component="div">
            {room.name}
          </Typography>
          <Typography
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            }}
            variant="body2"
            color="text.secondary"
          >
           {room.address}
          </Typography>
          <Typography component="div" variant="subtitle" style={{ marginTop:10}} color="text.secondary">
          🌟 {room.review_count}({room.review_number}) 
          </Typography>
          <Typography component="div" variant="subtitle" style={{ marginTop:10}} color="text.secondary">
          🏠 {room.beds} bed | {room.bath} bath 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
