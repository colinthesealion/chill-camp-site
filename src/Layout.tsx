import React from 'react';
import { RouteComponentProps } from '@reach/router';
import injectSheet from 'react-jss';

import styleSheet from './common.css';

interface Props extends RouteComponentProps {
  classes: {
    [key: string]: string;
  };
}
const About: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p>Coming soon.</p>
      </div>
    </div>
  );
};

export default injectSheet(styleSheet)(React.memo(About));
