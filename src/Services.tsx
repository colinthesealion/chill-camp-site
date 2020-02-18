import React from 'react';
import { RouteComponentProps } from '@reach/router';
import injectSheet from 'react-jss';

import styleSheet from './common.css';
import Event, { EventProps } from './Event';

interface Props extends RouteComponentProps {
  classes: {
    [key: string]: string;
  };
}
const services: EventProps[] = [
  {
    name: 'Healing Arts',
    description:
      'We will offer: craniosacral therapy, massage, reiki, guided meditation and biofield tuning. Please stop by to schedule a session with Alyssa or Doc.',
  },
  {
    name: 'Foot Bath',
    description: 'A 40 foot cuddle pool.',
  },
];
const Services: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <div className={classes.container}>
      {services.map(service => (
        <Event key={service.name} {...service} />
      ))}
    </div>
  );
};

export default injectSheet(styleSheet)(React.memo(Services));
