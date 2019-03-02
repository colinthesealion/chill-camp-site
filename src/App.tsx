import React from 'react';
import { Router, Link, RouteComponentProps } from '@reach/router';

import Home from './Home';

import './App.css';

const App: React.FunctionComponent<{}> = React.memo(() => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
});

export default App;
