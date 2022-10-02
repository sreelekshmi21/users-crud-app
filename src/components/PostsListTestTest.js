import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  EditButton,
  useGetList,
  DateField,
  SearchInput,
  DateTimeInput,
  ListToolbar,
  NumberInput,
  TextInput,
  BooleanInput,
  Button,
  useListContext,
  ExportButton,
  TopToolbar,
  DateInput,
  useRecordContext,
  useListController,
  ListContextProvider,
} from "react-admin";
import FormLabel from "@mui/material/FormLabel";
import { Tabs, Tab, Typography, Card } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { AddPostDetails } from "./AddPostDetails";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import ContentFilter from '@mui/icons-material/FilterList';
import { PostFilterForm } from "./PostFilterForm";
import { Box, Tooltip } from "@material-ui/core";
import AddPost from "./AddPost";
import { Link } from "react-router-dom";



export const PostsListTestTest = ({ check }) => {
  

  const [selected, setSelected] = useState("all")
  const selectRef = useRef()

 
  
  const {data, isLoading} = useListController({
    resource: 'posts',
    filter:{}

});

console.log('#S check DATA',check,data)
  
const statusTypes = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Resolved",
    value: "resolved",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
  {
    label: "Acknowledged",
    value: "acknowledged",
  },
];

const handleSelectChange = (e) => {
  setSelected(e.target.value);
  // selectRef.current = e.target.value
};

console.log('#SEL',selectRef)

if (isLoading) {
  return (
    <Box sx={{ width: "100%" }}>
      <h3>SSSSSSSSSSSSSss</h3>
    </Box>
  );
} else
  return (
    <>
    <ListContextProvider value={{ data }}>
    
         
      <h3>GGGGGGGGGGGGGGGGGG</h3>
      <div>
      <Box>
        <FormLabel>Status</FormLabel>
        <Select
          name="status"
          value={check ? check : selected}
          onChange={handleSelectChange}
          ref={selectRef}    
          displayEmpty
          renderValue={
            selected !== null ? undefined : () => <span>Select Status</span>
          }
        >
          {statusTypes?.map((status, index) => (
            <MenuItem key={index} value={status?.value}>
              {status?.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
      </div>
           </ListContextProvider>
    {/* <AddPost open={open}/> */}
    </>
  );
};
