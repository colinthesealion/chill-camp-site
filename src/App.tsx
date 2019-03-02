import React from 'react';
import { Router } from '@reach/router';

import Home from './Home';
import About from './About';
import Events from './Events';
import Services from './Services';
import Layout from './Layout';

import Hamburger from './Hamburger';
import './App.css';

const App: React.FunctionComponent<{}> = React.memo(() => {
  return (
    <>
      <Hamburger />
      <Router>
        <Home path="/" />
        <About path="about" />
        <Events path="events" />
        <Services path="services" />
        <Layout path="layout" />
      </Router>
    </>
  );
});

export default App;
