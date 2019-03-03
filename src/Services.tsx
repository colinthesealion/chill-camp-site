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
    name: "Doc's Lullaby Service",
    description:
      'Come get tucked in to a cozy bed and fall asleep as one of our trained bedtime specialists reads you a story or sings you a lullaby. House calls available upon request.',
  },
  {
    name: 'Healing Arts',
    description:
      'We will offer: craniosacral therapy, massage, reiki and guided meditation. Please stop by to schedule a session with Alyssa or Misha.',
  },
  {
    name: 'Tea',
    description:
      "Enjoy a hot cuppa. We're happy to serve you when someone's around, but otherwise help yourself.",
  },
  {
    name: 'Black Rock House of Pizza',
    description: 'Late night pizza delivery.',
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
