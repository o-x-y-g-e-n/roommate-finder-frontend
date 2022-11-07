import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Chip, ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import RoommateData from "../../assets/data/person.json";
import RoommateCard from "./RoommateCard";
const RoommateList = () => {
  const [price, setPrice] = React.useState();
  const [male, setMale] = React.useState();
  const [female, setFemale] = React.useState();
  const [homo, setHomo] = React.useState();
  const [age1, setAge1] = React.useState();
  const [age2, setAge2] = React.useState();
  const [age3, setAge3] = React.useState();
  const [age4, setAge4] = React.useState();
  const [location, setLocation] = React.useState();
  const [university, setUniversity] = React.useState();
  const [veg, setVeg] = React.useState();
  const [nonVeg, setNonVeg] = React.useState();
  const [vegan, setVegan] = React.useState();
  const [data, setData] = React.useState(RoommateData);
  const [filters, setFilters] = React.useState([]);
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const evaluateNewData = (operation, filter) => {
    let newData = [];
    let tempFilters = filters;
    if (operation == "add") {
      tempFilters.push(filter);
      setFilters([...filters, filter]);
    } else if (operation == "remove") {
      tempFilters = tempFilters.filter((item) => item !== filter);
      setFilters(filters.filter((item) => item !== filter));
    }
    console.log(tempFilters);
    tempFilters.forEach((filter) => {
      if (filter == "male") {
        newData = newData.concat(
          RoommateData.filter((d) => d.gender == "male")
        );
      } else if (filter == "female") {
        newData = newData.concat(
          RoommateData.filter((d) => d.gender == "female")
        );
      } else if (filter == "age1") {
        console.log("here asaads");
        newData = newData.concat(
          RoommateData.filter((d) => d.age >= 18 && d.age <= 25)
        );
        console.log(RoommateData.filter((d) => d.age >= 18 && d.age <= 25));
      } else if (filter == "age2") {
        newData = newData.concat(
          RoommateData.filter((d) => d.age >= 26 && d.age <= 34)
        );
      } else if (filter == "age3") {
        newData = newData.concat(
          RoommateData.filter((d) => d.age >= 35 && d.age <= 44)
        );
      } else if (filter == "age4") {
        newData = newData.concat(RoommateData.filter((d) => d.age >= 45));
      }
    });
    setData(newData);
  };
  const handleChange = (event) => {
    switch (event.target.value) {
      case "Male":
        if (male == "Male") {
          setMale(null);
          evaluateNewData("remove", "male");
          console.log("Male here");
        } else {
          evaluateNewData("add", "male");
          setMale(event.target.value);
        }
        break;
      case "Female":
        if (female == "Female") {
          setFemale(null);
          evaluateNewData("remove", "female");
          console.log("Fema;e here");
        } else {
          setFemale(event.target.value);
          evaluateNewData("add", "female");
        }
        break;
      case "Homo":
        if (homo == "Homo") {
          setHomo(null);
          evaluateNewData("remove", "homo");
          console.log("Homo here");
        } else {
          setHomo(event.target.value);
          evaluateNewData("add", "homo");
        }
        break;
      case "Age1":
        if (age1 == "Age1") {
          setAge1(null);
          evaluateNewData("remove", "age1");
          console.log("age 1here");
        } else {
          setAge1(event.target.value);
          evaluateNewData("add", "age1");
        }
        break;
      case "Age2":
        if (age2 == "Age2") {
          setAge2(null);
          evaluateNewData("remove", "age2");
          console.log("age 1here");
        } else {
          setAge2(event.target.value);
          evaluateNewData("add", "age2");
        }
        break;
      case "Age3":
        if (age3 == "Age3") {
          setAge3(null);
          evaluateNewData("remove", "age3");
          console.log("age 1here");
        } else {
          setAge3(event.target.value);
          evaluateNewData("add", "age3");
        }
        break;
      case "Age4":
        if (age4 == "Age4") {
          setAge4(null);
          evaluateNewData("remove", "age4");
          console.log("age 1here");
        } else {
          setAge4(event.target.value);
          evaluateNewData("add", "age4");
        }
        break;
      case "Veg":
        if (veg == "Veg") {
          setVeg(null);
          evaluateNewData("remove", "veg");
          console.log("veg here");
        } else {
          setVeg(event.target.value);
          evaluateNewData("remove", "veg");
        }
        break;
      case "NonVeg":
        if (nonVeg == "NonVeg") {
          setNonVeg(null);
          evaluateNewData("remove", "nonveg");
          console.log("non-veg here");
        } else {
          setNonVeg(event.target.value);
          evaluateNewData("add", "nonveg");
        }
        break;
      case "Vegan":
        if (vegan == "Vegan") {
          setVegan(null);
          evaluateNewData("remove", "vegan");
          console.log("Vegan");
        } else {
          setVegan(event.target.value);
          evaluateNewData("add", "vegan");
        }
        break;
    }
  };

  const RoomMateFilter = () => {
    return (
      <div>
        <FormControl sx={{ minWidth: 120 }} style={{ marginRight: "5px" }}>
          <InputLabel id="demo-simple-select-label">Budget</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            label="Budget"
            onChange={handlePriceChange}
          >
            <MenuItem value={10}>{"0-1000$"}</MenuItem>
            <MenuItem value={20}>{"1001-2500$"}</MenuItem>
            <MenuItem value={30}>{"$2501+"}</MenuItem>
          </Select>
        </FormControl>
        <ToggleButtonGroup
          color="primary"
          value={male}
          exclusive
          onChange={handleChange}
          aria-label="Male"
        >
          <ToggleButton
            style={{ marginRight: "5px", marginTop: "5px" }}
            value="Male"
          >
            Male
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          value={female}
          exclusive
          onChange={handleChange}
          aria-label="Female"
        >
          <ToggleButton
            style={{ marginRight: "5px", marginTop: "5px" }}
            value="Female"
          >
            Female
          </ToggleButton>
          <ToggleButtonGroup
            color="primary"
            value={homo}
            exclusive
            onChange={handleChange}
            aria-label="Homo"
          >
            <ToggleButton
              style={{ marginRight: "5px", marginTop: "5px" }}
              value="Homo"
            >
              Homo
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={age1}
            exclusive
            onChange={handleChange}
            aria-label="age1"
          >
            <ToggleButton
              style={{ marginRight: "5px", marginTop: "5px" }}
              value="Age1"
            >
              Age: 18-25
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={age2}
            exclusive
            onChange={handleChange}
            aria-label="age2"
          >
            <ToggleButton
              style={{ marginRight: "5px", marginTop: "5px" }}
              value="Age2"
            >
              Age: 26-34
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={age3}
            exclusive
            onChange={handleChange}
            aria-label="age3"
          >
            <ToggleButton
              style={{ marginRight: "5px", marginTop: "5px" }}
              value="Age3"
            >
              Age: 35-45
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={age4}
            exclusive
            onChange={handleChange}
            aria-label="age4"
          >
            <ToggleButton
              style={{ marginRight: "5px", marginTop: "5px" }}
              value="Age4"
            >
              Age: 45+
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={veg}
            exclusive
            onChange={handleChange}
            aria-label="Veg"
          >
            <ToggleButton
              style={{ marginRight: "5px", marginTop: "5px" }}
              value="Veg"
            >
              Vegeterian
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={nonVeg}
            exclusive
            onChange={handleChange}
            aria-label="NonVeg"
          >
            <ToggleButton
              style={{ marginRight: "5px", marginTop: "5px" }}
              value="NonVeg"
            >
              Non-Veg
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={vegan}
            exclusive
            onChange={handleChange}
            aria-label="Vegan"
          >
            <ToggleButton
              style={{ marginRight: "5px", marginTop: "5px" }}
              value="Vegan"
            >
              Vegan
            </ToggleButton>
          </ToggleButtonGroup>
        </ToggleButtonGroup>
      </div>
    );
  };
  return (
    <div>
      <RoomMateFilter />
      <div className="parent">
        {data.map((person) => {
          return <RoommateCard person={person} />;
        })}
      </div>
    </div>
  );
};

export default RoommateList;
