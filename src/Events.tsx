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
const events: EventProps[] = [
  {
    name: 'Slow-Mo Disco',
    description: 'Half-time beats to lull you into a groovy trance.',
  },
  {
    name: 'Get Your Nails Did',
    description: 'Pop-up nail salon.',
  },
  {
    name: 'Happy Budha Belly Hour',
    description: 'Belly relaxation and self-love.',
  },
];
const Events: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <div className={classes.container}>
      {events.map(event => (
        <Event key={event.name} {...event} />
      ))}
    </div>
  );
};

export default injectSheet(styleSheet)(React.memo(Events));
