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

const TabPanel = (props) => {
  const { index, value, children } = props;
  return (
    <React.Fragment>
      {value === index && <Typography>{children}</Typography>}
    </React.Fragment>
  );
};

export const PostsListTestTest = ({ check }) => {
  const [selected, setSelected] = useState("All")

  const selectRef = useRef()

  // const fromStr = 'GANU'
  const [value, setValue] = useState(0);
  const fromDate = ' 2022-07-19T21:29:00:000Z'
  const toDate = ' 2022-07-23T21:29:00:000Z'
  const [post, setPost] = useState([])

  const dateParseRegex = /(\d{4})-(\d{2})-(\d{2})/;
  const [filter, setFilter] = useState({
    filter: {q: 'SS', from: fromDate, to: toDate}
  })

    // const handleTabChange = (e) =>{
    //     setSelected(e.target.value)
    // }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const dateParser = value => {
      //value is a string of "YYYY-MM-DD" format
      console.log('#DATE 1',value)
      const match = dateParseRegex.exec(value);
      if (match === null) return;
      const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3]);
      if (isNaN(d.getDate())) return;
      console.log('#DATE 2',d)
      return d;
  };

  //   const { data:postData, total, isLoading } = useGetList("posts", {
  //   pagination: { page: 1, perPage: 5 },
  //   filter:{q: filter, from: fromDate, to: toDate}
  // });

  const {data, isLoading} = useListController({
    resource: 'posts',
    filter:{q: filter, from: fromDate, to: toDate}

});

console.log('#S check DATA',check,data)
  // useEffect(() => {
  //   if(!postData) return
  //   setPost(postData)
  // }, [postData])
  
  const [open, setOpen] = useState(false);

    const filters = [
      <TextInput label="Search" source="q" alwaysOn />,
      // <TextInput label="From" source="from" alwaysOn />,
      <DateTimeInput source="from" alwaysOn/>,
      <DateTimeInput source="to" alwaysOn/>
  ];

  // const filterValues = {q: 'SS', from: fromDate, to: toDate}
  // const setFilters = filters => setFilter(filters)
    // const { showFilter, data } = useListContext();

    // const postFilters = [
    //   <SearchInput source="q" alwaysOn />,
    //   <DateTimeInput source="from" alwaysOn/>,
    //   <TextInput source="title" alwaysOn />,
    // ];
    // const [from, setFrom] = useState(null)

  // const { data, total, isLoading, error } = useGetList("posts", {
  //   pagination: { page: 1, perPage: 5 },
  //   filter:{q: '', selected, from: ''}
  // });
  // if (isLoading) {
  //   return <div>Loading</div>;
  // }
  // if (error) {
  //   return <p>ERROR</p>;
  // }

  // const formatDate = (e) =>{
  //   console.log('#POST DATE',e)
  //   const date = new Date(e)
  //   const dte  = (date.getDate() + '/' + (date.getMonth() + 1)   + '/' +  date.getFullYear());
  //   console.log('#POST DATE',dte)
  //   return dte
  // }


  useEffect(() => {
    const user = localStorage.getItem('username') 
    console.log('#HS',user)
    // if (user && user !== 'undefined') {           
    //     this.props.history.push('/')              
    // }
  }, [])
  


  const DateFieldTest = () =>{
    // const record = useRecordContext()
    const date = new Date()
    const dte  = (date.getDate() + '/' + (date.getMonth() + 1)   + '/' +  date.getFullYear());
  return (
    <>
      <span>{dte}</span>
    </>
  )
}

const PostFilterButton = () => {
  const { showFilter } = useListContext();
  console.log('#show',useListContext())
  return (
      <Button
          size="small"
          color="primary"
          onClick={() => showFilter("main")}
          startIcon={<ContentFilter />}
      >
          Filter
      </Button>
  );
};


  const handleFilter = () =>{
    console.log('#POST handleFilter')
    setFilter({
      filter: {
        q: 'TT',
        from: '22222',
        to: '77777'
      }
    })
  }

 console.log('#POST',filter)

 const ListActions = () => (
  <Box width="100%">
      {/* <TopToolbar>
          <PostFilterButton />
          <ExportButton />
      </TopToolbar>
      <PostFilterForm /> */}
      <Button onClick={handleFilter}>CLLLLLs</Button>
  </Box>
);

const handleClick = (record) =>{
  const addr = {}
  console.log('#AddressField_ handleClick',record)
  const brs_data = post;
  console.log('#AddressField_ handleClick',brs_data)
  const itm = brs_data?.find((item) => item?.id == 100)
  console.log('#AddressField_ handleClick',itm)
  itm['title'] = 'ADDRESS'
  setPost([...brs_data]);
}
const AddressField = () => { 
  const record = useRecordContext();
  console.log('#AddressField_',record)
  const addr = 'ADDRESS'
  
  const [hover,setHover] = useState(false)

  return (
     <>
      <Tooltip
        // open={hover}
        // onClose={() => setHover(false)}
        // onOpen={() => setHover(true)}
        title={addr}
      >
     <span onClick={() => setHover(!hover)}>SSSS</span>
     </Tooltip>
     </>  
  );
};

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
    <ListContextProvider value={{ data, setFilter, filter }} filters={filters}>
    
         
      <h3>GGGGGGGGGGGGGGGGGG</h3>
      <div>
      <Box>
        <FormLabel>Status</FormLabel>
        <Select
          name="status"
          value={selected}
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
