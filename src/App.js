// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { MemberList, MemberEdit } from './components/members';
import { LocaleChurchesList, LocaleChurchShow } from './components/locale_churches';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="members"
      list={MemberList}
      edit={MemberEdit}
    />
    <Resource
      name="locale_churches"
      list={LocaleChurchesList}
      show={LocaleChurchShow}
      perPage={25} />
  </Admin>
);

export default App;