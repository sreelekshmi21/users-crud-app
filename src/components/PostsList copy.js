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
} from "react-admin";
import React, { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { AddPostDetails } from "./AddPostDetails";



export const PostsList = ({ props }) => {
  const [selected, setSelected] = useState("All")

    const handleChange = (e) =>{
        setSelected(e.target.value)
    }

    const postFilters = [
      <SearchInput source="q" alwaysOn />,
      <DateTimeInput source="from" alwaysOn/>,
      <TextInput source="title" alwaysOn />,
    ];
    // const [from, setFrom] = useState(null)

  const { data, total, isLoading, error } = useGetList("posts", {
    pagination: { page: 1, perPage: 5 },
    filter:{q: '', selected, from: ''}
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <p>ERROR</p>;
  }

  // const formatDate = (e) =>{
  //   console.log('#POST DATE',e)
  //   const date = new Date(e)
  //   const dte  = (date.getDate() + '/' + (date.getMonth() + 1)   + '/' +  date.getFullYear());
  //   console.log('#POST DATE',dte)
  //   return dte
  // }


  


  const DateFieldTest = () =>{
    
    const date = new Date()
    const dte  = (date.getDate() + '/' + (date.getMonth() + 1)   + '/' +  date.getFullYear());
  return (
    <>
      <span>{dte}</span>
    </>
  )
}


 console.log('#POST')

  return (
    <List value={{ data }} filters={postFilters} filterDefaultValues={{ title: 'sree' }}>
      
<ListToolbar actions={<AddPostDetails selected={selected} setSelected={setSelected} handleChange={handleChange}/>} />
      <Datagrid>
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <DateFieldTest source="published_at" />
        <TextField source="body" />

        <EditButton />
      </Datagrid>
    </List>
  );
};
