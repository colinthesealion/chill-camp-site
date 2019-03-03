import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import injectSheet from 'react-jss';

import { CAMP_NAME } from './constants';
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
        <p>
          {CAMP_NAME} is a theme camp intended to be a place to chill out and
          enjoy some peace.
        </p>
        <p>
          We are a group of veteran burners, but new to SOAK. Our camp consists
          of the former organizers of Burning Man theme camps Tissue and a Plan
          and The Embassy.
        </p>
        <p>Our theme for this year is chill the f out.</p>
        <p>
          We will provide a cozy space to relax, take care of yourself, be
          entertained and get taken care of.
        </p>
        <p>
          Please see our{' '}
          <Link to="/events" className={classes.link}>
            events
          </Link>{' '}
          and{' '}
          <Link to="/services" className={classes.link}>
            services
          </Link>{' '}
          for more details.
        </p>
        <p>
          For more information, please contact{' '}
          <a href="mailto:docto.responsible@gmail.com" className={classes.link}>
            Dr. Responsible
          </a>
          .
        </p>
        <p>
          This website was built with{' '}
          <a
            href="https://facebook.github.io/create-react-app/"
            className={classes.link}
          >
            Create React App
          </a>{' '}
          and published using{' '}
          <a href="https://zeit.co/now" className={classes.link}>
            now.sh
          </a>
          . The code is open source and available on{' '}
          <a
            href="https://github.com/colinthesealion/chill-camp-site"
            className={classes.link}
          >
            github
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default injectSheet(styleSheet)(React.memo(About));
