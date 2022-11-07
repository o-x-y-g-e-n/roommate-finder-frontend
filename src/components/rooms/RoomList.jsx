import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Chip, ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import RoomsData from '../../assets/data/rooms.json'
import RoomCard from "./RoomCard";
const RoomList = () => {
  const [price, setPrice] = React.useState();
  const [kitchen, setKitchen] = React.useState();
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleKitchenChange = (event) => {
    if (kitchen == "Kitchen") {
      setKitchen(null);
    } else setKitchen(event.target.value);
  };

  const RoomFilter = () => {
    return (
      <div>
        <FormControl sx={{ minWidth: 120 }} style={{marginRight: "5px"}}>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            label="price"
            onChange={handlePriceChange}
          >
            <MenuItem value={10}>{"0-1000$"}</MenuItem>
            <MenuItem value={20}>{"1001-2500$"}</MenuItem>
            <MenuItem value={30}>{"$2501+"}</MenuItem>
          </Select>
        </FormControl>
        <ToggleButtonGroup
          color="primary"
          value={kitchen}
          exclusive
          onChange={handleKitchenChange}
          aria-label="Platform"
        >
          <ToggleButton style={{ marginRight: "5px",marginTop:'5px'}} value="Kitchen">Kitchen</ToggleButton>
        </ToggleButtonGroup>

        <ToggleButton
          style={{ marginRight: "5px", marginTop: "5px" }}
          value="Wifi"
        >
          Wifi
        </ToggleButton>
        <ToggleButton
          style={{ marginRight: "5px", marginTop: "5px" }}
          value="Free Cancellation"
        >
          Free Cancellation
        </ToggleButton>
        <ToggleButton
          style={{ marginRight: "5px", marginTop: "5px" }}
          value="Free Cancellation"
        >
          Free Cancellation
        </ToggleButton>
        <ToggleButton
          style={{ marginRight: "5px", marginTop: "5px" }}
          value="Air Conditioning"
        >
          Air Conditioning
        </ToggleButton>
        <ToggleButton
          style={{ marginRight: "5px", marginTop: "5px" }}
          value="Washer"
        >
          Washer
        </ToggleButton>
        <ToggleButton
          style={{ marginRight: "5px", marginTop: "5px" }}
          value="Dedicated Workspace"
        >
          Dedicated Workspace
        </ToggleButton>
      </div>
    );
  };
  return (
    <div>
      <RoomFilter />
      <div className="parent">
        {console.log(RoomsData)}
        {RoomsData.map(room => {
            return <RoomCard room={room} />
        })}
      </div>
    </div>
  );
};

export default RoomList;
