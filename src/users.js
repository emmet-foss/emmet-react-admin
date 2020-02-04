import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const MemberList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="_id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);