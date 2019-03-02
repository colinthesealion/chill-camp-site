import { COLORS } from './constants';

const styles: Readonly<{ [key: string]: Readonly<{ [key: string]: any}> }> = {
    nav: {
        zIndex: 100,
    },
    link: {
        color: COLORS.foreground,
        '&:not(:last-child):after': {
            content: '" | "',
        },
        '& a': {
            color: COLORS.foreground,
        },
    }
};

export default styles;
