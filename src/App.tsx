import React from 'react';
import { Router } from '@reach/router';

import Home from './Home';
import About from './About';

import Hamburger from './Hamburger';
import './App.css';

const App: React.FunctionComponent<{}> = React.memo(() => {
  return (
    <>
      <Hamburger />
      <Router>
        <Home path="/" />
        <About path="about" />
      </Router>
    </>
  );
});

export default App;
