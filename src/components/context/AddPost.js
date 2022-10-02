import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
     Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export default function AddPost({props}) {
  return (
    <Create {...props}>
      <SimpleForm>
                  <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
           </ReferenceInput>
           <TextInput source="title" />
            <TextInput multiline source="body" />
       </SimpleForm>
   </Create>
  )
}
