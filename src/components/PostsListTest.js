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
import { PostsListTestTest } from "./PostsListTestTest";
import Chart from "./Chart";

const TabPanel = (props) => {
  const { index, value, children } = props;
  return (
    <React.Fragment>
      {value === index && <Typography>{children}</Typography>}
    </React.Fragment>
  );
};

export const PostsListTest = () => {
  const [check, setCheck] = useState("All")
  const [value, setValue] = useState(0)

  const handleChange = (newValue) =>{
    setValue(newValue)
  }

  const handleRedirect = (valu) =>{
    console.log('#S BASE',valu)
    setValue(1)
    setCheck(valu)
  }


  return (
    <>
   
    <Tabs value={value} onChange={handleChange}>
           <Tab label="MAPP" />
            <Tab label="PostsTest" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Chart handleRedirect={handleRedirect}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
             <PostsListTestTest check={check} setCheck={setCheck}/>
          </TabPanel>
    </>
  );
};
