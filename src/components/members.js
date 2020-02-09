import React from 'react';
import {
    List, Datagrid, TextField, EditButton,
    SimpleForm, Edit, TextInput, ReferenceField, ReferenceInput, SelectInput, required,
    Create, Filter
} from 'react-admin';

const MembersFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="lastName" alwaysOn />
      <ReferenceInput label="Member" source="id" reference="members" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

export const MemberList = props => (
    <List filters={<MembersFilter />} {...props}>
        <Datagrid>
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
            <TextInput source="email" />
            <TextInput source="churchId" />
            <ReferenceInput
              label="Locale Church"
              source="localeChurchId"
              reference="locale_churches"
              validate={[required()]}
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const MemberCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="lastName" />
          <TextInput source="firstName" />
          <TextInput source="email" />
          <TextInput source="churchId" />
          <ReferenceInput
            label="Locale Church"
            source="localeChurchId"
            reference="locale_churches"
            validate={[required()]}
          >
              <SelectInput optionText="name" />
          </ReferenceInput>
      </SimpleForm>
  </Create>
);