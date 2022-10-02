// import React from 'react'
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  Select,
  Card,
  MenuItem,
  Checkbox,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "react-admin";

export default function MultiSelect({ columnData, setColumnData, handleShow }) {
  const [personName, setPersonName] = React.useState([]);
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
    const names = [
    //   'Oliver Hansen',
    //   'Van Henry',
    //   'April Tucker',
    //   'Ralph Hubbard',
    //   'Omar Alexander',
    //   'Carlos Abbott',
    //   'Miriam Wagner',
    //   'Bradley Wilkerson',
    //   'Virginia Andrews',
    //   'Kelly Snyder',
    'id',
    'title','body'
    ];

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  console.log('#names',personName)
  return (
    <div>
      <FormControl sx={{ m: 1, width: 196 }}>
        {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleSelectChange}
          // input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((obj, index) => (
            <MenuItem key={index} value={obj}>
              <Checkbox checked={personName.indexOf(obj) > -1} />
              <ListItemText primary={obj} />
            </MenuItem>
          ))}
        </Select>
        <Button onClick={() => handleShow(personName)}>Show</Button>
      </FormControl>
    </div>
  );
}
