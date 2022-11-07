import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { YearPicker } from "@mui/x-date-pickers/YearPicker";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EducationCard from "./EducationCard";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function Review() {
  const [universityName, setUniversityName] = React.useState();
  const [startYear, setStartYear] = React.useState();
  const [edulocation, setEduLocation] = React.useState();
  const [eduDegree, setEduDegree] = React.useState();
  const [eduMajor, setEduMajor] = React.useState();
  const [Uniopen, setUniopen] = React.useState(false);
  const [appstatus, setAppStatus] = React.useState();
  const handleUniClose = () => {
    setUniopen(false);
  };

  const handleStatusChange = (value) => {
    setAppStatus(value);
  };
  const handleUniClickOpen = () => {
    setUniopen(true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ paddingBottom: "5px" }}>
        Enter your admission Details
      </Typography>
      <Grid container spacing={2}>
        <Grid>
          <EducationCard isAdmit="Accepted" />
        </Grid>
        <Button
          onClick={handleUniClickOpen}
          style={{ marginTop: "10px" }}
          variant="outlined"
        >
          Add University
        </Button>
      </Grid>
      <Dialog open={Uniopen} onClose={handleUniClose}>
        <DialogTitle>Add Education</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Adding university strengthen your profile and find relative
            roommates
          </DialogContentText>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              onChange={(event) => setUniversityName(event.target.value)}
              label="University Name"
              placeholder="Stanford University"
              type="text"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              onChange={(event) => setEduDegree(event.target.value)}
              label="Degree"
              type="text"
              placeholder="Masters of Technology"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              onChange={(event) => setUniversityName(event.target.value)}
              label="Major"
              type="text"
              placeholder="Computer Science"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              onChange={(event) => setUniversityName(event.target.value)}
              label="Location"
              type="text"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid style={{ marginTop: "16px" }} item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                views={["year"]}
                label="Start Year"
                value={startYear}
                onChange={setStartYear}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
            <FormControl sx={{ minWidth: "95%" }}>
              <InputLabel id="demo-controlled-open-select-label">
                Application Status
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-simple-select"
                value={appstatus}
                label="Application Status"
                onChange={handleStatusChange}
              >
                <MenuItem value={10}>Accepted</MenuItem>
                <MenuItem value={20}>Pending</MenuItem>
                <MenuItem value={30}>Rejected</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUniClose}>Cancel</Button>
          <Button onClick={handleUniClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
