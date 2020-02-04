// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { MemberList } from './users';

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="members" list={MemberList} />
    </Admin>
);

export default App;