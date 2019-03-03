import React from 'react';
import { Link } from '@reach/router';
import injectSheet from 'react-jss';

import { ROUTES } from './constants';
import styleSheet from './NavBar.css';

interface Props {
  classes: {
    [key: string]: string;
  };
}
const NavBar: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <nav className={classes.nav}>
      {ROUTES.map(route => (
        <span key={route} className={classes.link}>
          <Link key={route} to={`/${route}`}>
            {route}
          </Link>
        </span>
      ))}
      <span key="github" className={classes.link}>
        <a href="https://github.com/colinthesealion/chill-camp-site">source</a>
      </span>
    </nav>
  );
};

export default injectSheet(styleSheet)(React.memo(NavBar));
