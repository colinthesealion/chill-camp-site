import React, { useState, useCallback } from 'react';
import { Link } from '@reach/router';
import injectSheet from 'react-jss';

import { ROUTES } from './constants';
import styleSheet from './Hamburger.css';

interface Props {
    classes: {
        [key: string]: string,
    }
}
const Hamburger: React.FunctionComponent<Props> = ({ classes }) => {
    const [ isOpen, setOpen ] = useState(false);
    const handleClick = useCallback(() => {
        setOpen(!isOpen);
    }, [ isOpen ]);
    return (
        <>
            <div
                className={classes.button}
                onClick={handleClick}
            >
                ☰
            </div>
            {isOpen && (
                <div
                    className={classes.container}
                >
                    <div className={classes.menu}>
                        <a
                            onClick={handleClick}
                            className={classes.closeButton}
                        >
                            ×
                        </a>
                        <nav>
                            <Link
                                key="home"
                                to="/"
                                onClick={handleClick}
                            >
                                home
                            </Link>
                            {ROUTES.map((route) => (
                                <Link
                                    key={route}
                                    to={`/${route}`}
                                    onClick={handleClick}
                                >
                                    {route}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default injectSheet(styleSheet)(React.memo(Hamburger));
