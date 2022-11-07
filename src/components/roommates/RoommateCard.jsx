import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function RoommateCard({ person }) {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://avatars.dicebear.com/api/avataaars/${person.index}.svg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {person.name}
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
           {person.address}
          </Typography>
          <Typography component="div" variant="subtitle" style={{ marginTop:10}} color="text.secondary">
          ⚡ {person.gender} | {person.age} | {person.food_pref}
          </Typography>
          <Typography component="div" variant="subtitle" style={{ marginTop:10}} color="text.secondary">
          💵 Budget: {person.budget}
          </Typography>
          <Typography component="div" variant="subtitle" style={{ marginTop:10}} color="text.secondary">
          👩‍🎓️ Admit: {person.university} - {person.admit}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
