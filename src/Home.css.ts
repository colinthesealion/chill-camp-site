import { COLORS } from './constants';

const styles: Readonly<{ [key: string]: Readonly<{ [key: string]: any }> }> = {
  container: {
    position: 'relative',
    top: '25%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 'min-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: COLORS.background,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(150, 123, 182, 0.9)',
    fontSize: 36,
    height: 'min-content',
    width: 'min-content',
    whiteSpace: 'nowrap',
    zIndex: 100,
    textAlign: 'center',
    lineHeight: 0.75,
  },
  subheader: {
    fontSize: 18,
  },
};

export default styles;
