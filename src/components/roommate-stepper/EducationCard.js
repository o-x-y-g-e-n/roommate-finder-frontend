import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
export default function EducationCard({ isAdmit }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            University of Maryland
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Bachelor of Technology, Human Centered Computing
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            Baltimore, Maryland
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {isAdmit != null ? (
              <span>Graduation Year: </span>
            ) : (
              <span>Starting from: </span>
            )}
            2022
          </Typography>
          {isAdmit != null ? (
            <div>
              <Chip label={isAdmit} />
            </div>
          ) : (
            <div></div>
          )}
        </CardContent>
      </Box>
      <Box
        sx={{ flex: "1 0 auto" }}
        component="img"
        style={{ marginLeft: "auto" }}
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 100, md: 100 },
          maxWidth: { xs: 100, md: 100 },
        }}
        alt="The house from the offer."
        src="https://i.ibb.co/svYsW3R/school-university-svgrepo-com.png"
      />
    </Card>
  );
}
