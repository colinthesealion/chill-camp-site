import { COLORS } from './constants';

const styles: Readonly<{ [key: string]: Readonly<{ [key: string]: any }> }> = {
  link: {
    color: COLORS.background,
  },
  container: {
    position: 'relative',
    top: '5%',
    width: 801,
    height: 'min-content',
    left: '50%',
    marginLeft: -400.5,
  },
  content: {
    borderRadius: 15,
    backgroundColor: COLORS.foreground,
    color: COLORS.background,
    padding: 20,
    marginBottom: 15,
  },
};

export default styles;
