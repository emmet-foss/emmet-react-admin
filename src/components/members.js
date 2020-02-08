import React from 'react';
import {
    List, Datagrid, TextField, EditButton,
    SimpleForm, Edit, TextInput, ReferenceField
} from 'react-admin';

export const MemberList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="lastName" />
            <TextField source="firstName" />
            <TextField source="churchId" />
            <ReferenceField source="localeChurchId" reference="locale_churches">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const MemberEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="lastName" />
            <TextInput source="firstName" />
            <TextInput source="churchId" />
        </SimpleForm>
    </Edit>
);