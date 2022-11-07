import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import FormLabel from "@mui/material/FormLabel";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

let pre_temp_hobbies = [
  "3D printing",
  "Amateur radio",
  "Scrapbook",
  "Amateur radio",
  "Acting",
  "Baton twirling",
  "Board games",
  "Book restoration",
  "Cabaret",
  "Calligraphy",
  "Candle making",
  "Computer programming",
  "Coffee roasting",
];

const pre_temp_movie_genre = [
  "Horror",
  "Drama",
  "Mystery",
  "Thriller",
]
export default function PaymentForm() {
  const [foodPref, setFoodPref] = React.useState();
  const [smoking, setSmoking] = React.useState();
  const [drinking, setDrinking] = React.useState();
  const [firstTimer, setFirstTimer] = React.useState();
  const [relationshipStatus, setRelationshipStatus] = React.useState();
  const [hobbies, setHobbies] = React.useState([]);
  const [movieInterest, setmovieInterest] = React.useState([]);
  const [otherFilters, setOtherFilters] = React.useState([]);

  const handleHobbiesChange = (event) => {
    const {
      target: { value },
    } = event;
    setHobbies(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleMoviesInterestChange = (event) => {
    const {
      target: { value },
    } = event;
    setmovieInterest(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleOtherFiltersChange = (event) => {
    const {
      target: { value },
    } = event;
    setOtherFilters(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Preferences
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl sx={{ minWidth: "95%" }}>
            <InputLabel id="demo-controlled-open-select-label">
              Food Preferences
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-simple-select"
              value={foodPref}
              label="Food Preferences"
              onChange={(event) => setFoodPref(event.target.value)}
            >
              <MenuItem value={10}>Vegan</MenuItem>
              <MenuItem value={20}>Non-Veg</MenuItem>
              <MenuItem value={30}>Jain</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ minWidth: "95%" }}>
            <InputLabel id="demo-controlled-open-select-label">
              Smoking
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-simple-select"
              value={smoking}
              label="Smoking"
              onChange={(event) => setSmoking(event.target.value)}
            >
              <MenuItem value={10}>Daily</MenuItem>
              <MenuItem value={20}>Occasionally</MenuItem>
              <MenuItem value={30}>Never</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ minWidth: "95%" }}>
            <InputLabel id="demo-controlled-open-select-label">
              Drinking
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-simple-select"
              value={drinking}
              label="Drinking"
              onChange={(event) => setDrinking(event.target.value)}
            >
              <MenuItem value={10}>Daily</MenuItem>
              <MenuItem value={20}>Occasionally</MenuItem>
              <MenuItem value={30}>Never</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Is this your first time coming out?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              onChange={(event) => setFirstTimer(event.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              What is your relationship status?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              onChange={(event) => setRelationshipStatus(event.target.value)}
            >
              <FormControlLabel
                value="single"
                control={<Radio />}
                label="Single"
              />
              <FormControlLabel
                value="relationship"
                control={<Radio />}
                label="In a relationship"
              />
              <FormControlLabel
                value="engaged"
                control={<Radio />}
                label="Engaged"
              />
              <FormControlLabel
                value="married"
                control={<Radio />}
                label="Married"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Prefer Not to Say"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item style={{ marginTop: "5px" }}>
          <FormControl sx={{ width: "350px" }}>
            <InputLabel id="demo-multiple-checkbox-label">Hobbies</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={hobbies}
              onChange={handleHobbiesChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {pre_temp_hobbies.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={hobbies.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item style={{ marginTop: "20px" }}>
          <FormControl sx={{ width: "350px" }}>
            <InputLabel id="demo-multiple-checkbox-label">Movie Interest</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={movieInterest}
              onChange={handleMoviesInterestChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {pre_temp_movie_genre.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={movieInterest.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
