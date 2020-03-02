import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars

const App = () => (
  <div id="app">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
