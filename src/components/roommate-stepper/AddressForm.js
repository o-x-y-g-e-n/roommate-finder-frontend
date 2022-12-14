import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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
import WorkExperienceCard from './WorkExperienceCard';
export default function AddressForm() {

  const [pFirstName, setPFirstName] = React.useState();
  const [pLastName, setPLastName] = React.useState();
  const [addr1, setAddr1] = React.useState();
  const [addr2, setAddr2] = React.useState();
  const [city, setCity] = React.useState();
  const [state, setState] = React.useState();
  const [zipcode, setZipcode] = React.useState();
  const [country, setCountry] = React.useState();
  const [relegion, setRelegion] = React.useState();

  const [MartialStatus, setMS] = React.useState();
  const [DOB, setDOB] = React.useState();
  const [gender, setGender] = React.useState();
  const [Uniopen, setUniopen] = React.useState(false);
  const [open, setopen] = React.useState(false);
  // add eductation dialog states
  const [universityName, setUniversityName] = React.useState();
  const [gradYear, setGradYear] = React.useState();
  const [edulocation, setEduLocation] = React.useState();
  const [eduDegree, setEduDegree] = React.useState();
  const [eduMajor, setEduMajor] = React.useState();
  const [fbURL, setFBURL] = React.useState();
  const [linkedinURL, setLinkedinURL] = React.useState();
  const [twitterURL, setTwitterURL] = React.useState();

  // work experience dialog states
  const [companyName, setCompanyName] = React.useState();
  const [jobTitle, setJobTitle] = React.useState();
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  const [location, setLocation] = React.useState();
  
  const handleMSChange = (event) => {
    setMS(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleUniClose = () => {
    setUniopen(false);
  };

  const handleUniClickOpen = () => {
    setUniopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };

  const handleClickOpen = () => {
    setopen(true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            onChange={event => {setPFirstName(event.target.value)}}
            label="Preferred First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            onChange={event => {setPLastName(event.target.value)}}
            label="Preferred Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            onChange={event => {setAddr1(event.target.value)}}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            onChange={event => {setAddr2(event.target.value)}}
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={event => {setCity(event.target.value)}}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            onChange={event => {setState(event.target.value)}}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="religion"
            name="religion"
            label="Religion"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, minWidth: "95%" }}>
            <InputLabel id="demo-controlled-open-select-label">
              Marital status
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-simple-select"
              value={MartialStatus}
              label="Martial Status"
              onChange={handleMSChange}
            >
              <MenuItem value={"Single"}>Single</MenuItem>
              <MenuItem value={"Married"}>Married</MenuItem>
              <MenuItem value={"Seperated"}>Seperated</MenuItem>
              <MenuItem value={"Divorced"}>Divorced</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={DOB}
              onChange={(newValue) => {
                setDOB(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, minWidth: "95%" }}>
            <InputLabel id="demo-controlled-open-select-label1">
              Gender
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label1"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleGenderChange}
            >
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="fbURL"
            name="fbURL"
            label="Facebook Profile URL"
            onChange={(event) => {setFBURL(event.target.value)}}
            fullWidth
            variant="standard"
          />
          </Grid>
          <Grid item xs={12}>
          <TextField
            id="linkedinURL"
            name="linkedinURL"
            label="LinkedIn Profile URL"
            fullWidth
            onChange={(event) => {setLinkedinURL(event.target.value)}}
            variant="standard"
          />
          </Grid>
          <Grid item xs={12}>
          <TextField
            id="twitterURL"
            name="twitterURL"
            label="Twitter Profile URL"
            fullWidth
            onChange={(event) => {setTwitterURL(event.target.value)}}
            variant="standard"
          />
          </Grid>
        <Grid item display={"flex"}>
          <Grid item style={{ marginRight: "5px" }}>
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleUniClickOpen}>
              Add Education
            </Button>
            <Dialog open={Uniopen} onClose={handleUniClose}>
              <DialogTitle>Add Education</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Adding university strengthen your profile and find relative
                  roommates
                </DialogContentText>
                <Grid item xs={12}>
                  <TextField
                    
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
                      label="Graduation Year"
                      value={gradYear}
                      onChange={setGradYear}
                      renderInput={(params) => (
                        <TextField {...params} helperText={null} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleUniClose}>Cancel</Button>
                <Button onClick={handleUniClose}>Add</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
        <Grid item>
          <EducationCard />
        </Grid>
      </Grid>
      <Grid item display={"flex"} style={{ marginTop: "20px" }}>
        <Grid item style={{ marginRight: "5px" }}>
          <Typography variant="h6" gutterBottom>
            Work Experience
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Experience
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Work Experience</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Add your work experience to strengthen your profile and find
                relative roommates
              </DialogContentText>
              <Grid item xs={12}>
                <TextField
                  
                  margin="dense"
                  id="name"
                  onChange={(event) => setUniversityName(event.target.value)}
                  label="Homie2Go"
                  placeholder="Apple"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  margin="dense"
                  id="name"
                  onChange={(event) => setEduDegree(event.target.value)}
                  label="Job Title"
                  type="text"
                  placeholder="Software Engineer"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid style={{ marginTop: "16px" }} item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["month", "year"]}
                    label="Start Date"
                    value={startDate}
                    onChange={event => setStartDate(event.target.value)}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid style={{ marginTop: "16px" }} item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["month", "year"]}
                    label="End Date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  margin="dense"
                  id="name"
                  onChange={(event) => setLocation(event.target.value)}
                  label="Location"
                  type="text"
                  placeholder="California, US"
                  fullWidth
                  variant="standard"
                />
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Add</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
      <Grid item>
        <WorkExperienceCard />
      </Grid>
    </React.Fragment>
  );
}
