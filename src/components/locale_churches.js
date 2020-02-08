import React from 'react';
import { List, Datagrid, TextField, Show, SimpleShowLayout } from 'react-admin';

export const LocaleChurchesList = props => (
  <List {...props} perPage={25}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
)

export const LocaleChurchShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="location" />
    </SimpleShowLayout>
  </Show>
);