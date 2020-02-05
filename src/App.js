// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { MemberList } from './components/users';
import { LocaleChurchesList } from './components/locale_churches';

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="members" list={MemberList} />
        <Resource name="locale_churches" list={LocaleChurchesList} perPage={25} />
    </Admin>
);

export default App;