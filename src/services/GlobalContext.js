import React from 'react';
import Api from './Api';
import Storage from './Storage';

export default React.createContext({
  api: new Api(),
  storage: new Storage(),
  adminToken: '',
  setAdminToken: () => {},
  analyseQuiz: () => {}
});
