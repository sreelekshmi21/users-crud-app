import React from "react";
import { List, Datagrid, TextField, EmailField, ReferenceField, useRecordContext,EditButton, TextInput, ReferenceInput, SimpleForm, Edit, SelectInput } from 'react-admin';

export default function EditPost({ props }) {

  const PostTitle = () =>{
    const record = useRecordContext();
    return (
        <span>Post {record ? `${record.title}` : ''}</span>
    )
  }


  return (
    <Edit {...props} title={<PostTitle />}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Edit>
  );
}
