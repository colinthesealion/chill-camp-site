import React from 'react';
import { RouteComponentProps } from '@reach/router';
import injectSheet from 'react-jss';

import Wave from './Wave';
import styleSheet from './Home.css';
import { CAMP_NAME } from './constants';
import NavBar from './NavBar';

interface Props extends RouteComponentProps {
  classes: {
    [key: string]: string;
  };
}
const Home: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.header}>
          {CAMP_NAME}
          <br />
          <span className={classes.subheader}>Featuring Donnie Rex</span>
          <br />
          <span className={classes.subheader}>A Responsible Production</span>
          <br />
          <span className={classes.subheader}>
            When the slowing gets tough, the tough get slowing
          </span>
          <br />
          <span className={classes.subheader}>
            Coming soon to own on DVD and Video
          </span>
        </div>
        <Wave />
        <NavBar />
      </div>
    </div>
  );
};

export default injectSheet(styleSheet)(React.memo(Home));
