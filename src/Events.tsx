import React from 'react';
import { RouteComponentProps } from '@reach/router';
import injectSheet from 'react-jss';

import styleSheet from './common.css';
import Event, { EventProps } from './Event';

interface Props extends RouteComponentProps {
    classes: {
        [key: string]: string,
    },
}
const events: EventProps[] = [
    {
        name: 'Chilling 101',
        description: 'Learn the basics of chilling out.'
    },
    {
        name: 'Netflix & Chilli',
        description: 'Watch movies with us. Vegan and meat chili served.',
    },
    {
        name: 'Advanced Chilling',
        description: 'Master class in chilling out. Prerequisite: Chilling 101.',
    },
];
const Events: React.FunctionComponent<Props> = ({ classes }) => {
    return (
        <div className={classes.container}>
            {events.map(
                event => <Event key={event.name} {...event} />
            )}
        </div>
    );
};

export default injectSheet(styleSheet)(React.memo(Events));
