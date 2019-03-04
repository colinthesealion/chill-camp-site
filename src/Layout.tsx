import React from 'react';
import { RouteComponentProps } from '@reach/router';
import injectSheet from 'react-jss';

import styleSheet from './common.css';
import layout from './Layout.png';

interface Props extends RouteComponentProps {
  classes: {
    [key: string]: string;
  };
}
const About: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p>
          This layout assumes we are in the woods, which is our preference, but
          we can adapt to different terrain.
        </p>
        <img src={layout} alt="layout" />
      </div>
    </div>
  );
};

export default injectSheet(styleSheet)(React.memo(About));
