import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const LocaleChurchesList = props => (
    <List { ...props } perPage={25}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
)