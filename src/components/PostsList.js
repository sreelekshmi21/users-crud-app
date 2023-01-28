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

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import ContentFilter from '@mui/icons-material/FilterList';
// import { PostFilterForm } from "./PostFilterForm";
import { Box, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import PostFilterForm from "./MyLayOut";
import LoadingComponent from "./LoadingComponent";



export const PostsList = () => { 

  
  
  const {data, isLoading} = useListController({
    resource: 'posts',
    filter:{}

});

console.log('#RA POSTLIST DATA',data)
  


if (isLoading) {
  return (
    <Box sx={{ width: "100%" }}>
      <h3>LOADING</h3>
    </Box>
  );
} else
  return (
    <>
    <List value={{ data }}>
    <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
           
        </Datagrid>
     
     
           </List>
    </>
  );
};
