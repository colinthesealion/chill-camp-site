import React from 'react';
import injectSheet from 'react-jss';

import styleSheet from './common.css';

export interface EventProps {
  name: string;
  description: string;
  when?: string;
  classes?: {
    [key: string]: string;
  };
}
const Event: React.FunctionComponent<EventProps> = ({
  classes,
  name,
  description,
  when,
}) => {
  return (
    <div className={classes && classes.content}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{when}</p>
    </div>
  );
};

export default injectSheet(styleSheet)(React.memo(Event));
