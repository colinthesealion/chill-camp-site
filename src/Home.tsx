import React from 'react';
import { RouteComponentProps } from '@reach/router';
import injectSheet from 'react-jss';

import SineWave from './SineWave';
import styleSheet from './Home.css';

interface Props extends RouteComponentProps {
  classes: {
      [key: string]: string,
  },
};
const Home: React.FunctionComponent<Props> = ({ classes }) => {
    return (
        <div>
          <h1 className={classes.header}>Take a Chili Pill</h1>
          <SineWave />
        </div>
    );
};

export default injectSheet(styleSheet)(React.memo(Home));
