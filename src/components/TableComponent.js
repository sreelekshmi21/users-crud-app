import React from "react";
import {
  Datagrid,
  ListContextProvider,
  ListToolbar,
  TextField,
  useRecordContext,
  FunctionField,
  useListController,
  Button,
  Pagination,
  BulkDeleteButton,
  SelectField,
} from "react-admin";

import { Box, LinearProgress, Card } from "@mui/material";
import ViewIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Typography } from "@material-ui/core";
import MultiSelect from "./MultiSelect";

const Buttonstyle = {
  position: "absolute",
  background: "blue",
  color: "#fff",
  zIndex: 1,
  textTransform: "capitalize",
  width: "150px",
};

export default function TableComponent() {
    const [field, setField] = React.useState([]);
  const PostPanel = ({tableData}) => (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",

        "& a": {
          textDecoration: "none",
          color: "inherit",
        },
      }}
    >
      <table
        id="expand-table"
        class="display table-bordered"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th>Point</th>
            <th>Entity</th>
          </tr>
        </thead>
        
        <tbody>
        {tableData ? tableData?.map((rec,ind) => <tr>
            <td>{rec?.title}</td>
            <td>{rec?.body}</td>
          </tr>) : <Typography>No Rows</Typography>}
         
        </tbody>
      </table>
    </Card>
  );
  const { data, isLoading, ...listContext } = useListController({
    resource: "posts",
  });

  console.log('#TableComponent',data)

  const handleShow = (personName) =>{
    // e.preventDefault()
    console.log('#handleShow',personName)
    setField(personName)
    // setExpanded(true)
  }

  console.log('#handleShow',field)

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  } else
    return (
      <div className="report-select">
        <ListContextProvider
          value={{
            data,
            ...listContext,
          }}
        >
          <Datagrid expand={<PostPanel tableData={data}/>} bulkActionButtons={<BulkDeleteButton />}>
            {field?.length === 0 ? <>
                <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            </> : field?.map((field) => {
                if(field === 'title')  <TextField source="title" />
            })}
            
            
          </Datagrid>
          <MultiSelect handleShow={handleShow}/>
          <Pagination />
        </ListContextProvider>
      </div>
    );
}
