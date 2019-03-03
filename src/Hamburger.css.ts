import { COLORS } from './constants';

const styles: Readonly<{ [key: string]: Readonly<{ [key: string]: any }> }> = {
  button: {
    position: 'absolute',
    top: 10,
    left: 10,
    height: 'min-content',
    width: 'min-content',
    cursor: 'pointer',
    fontSize: 36,
  },
  container: {
    position: 'absolute',
    top: 0,
    width: '20%',
    height: '100%',
    backgroundColor: 'white',
    zIndex: 100,
    border: `5px solid ${COLORS.background}`,
  },
  menu: {
    backgroundColor: COLORS.foreground,
    height: '100%',
    padding: 10,
    '& a': {
      display: 'block',
      color: COLORS.background,
      lineHeight: 2,
    },
  },
  closeButton: {
    float: 'right',
    cursor: 'pointer',
  },
  '@media (max-width:480px)': {
    container: {
      width: '30%',
    },
  },
};

export default styles;
