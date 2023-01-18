import React, { useEffect, useState } from "react";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

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

const UserDetails = () => {
  const [userData, setUserData] = useState();
  const [personName, setPersonName] = useState([]);
  const checkUSerDetails = async () => {
    const user = await axios.get("http://localhost:3001/");
    if (user) {
      setUserData(user);
      console.log(user);
    }
  };

  useEffect(() => {
    checkUSerDetails();
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {/* {userData?.data?.entries?.map((item, index) => ( */}
      {/* <div
          key=
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
      {/* <h3 style={{ marginLeft: "20px" }}>{item.API}</h3> */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {userData?.data?.entries?.map((name) => (
            <MenuItem key={name.Link} value={name.API}>
              <Checkbox checked={personName.indexOf(name.API) > -1} />
              <ListItemText primary={name.API} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* </div>
      ))} */}
    </div>
  );
};

export default UserDetails;
