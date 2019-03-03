import { COLORS } from './constants';

const styles: Readonly<{ [key: string]: Readonly<{ [key: string]: any }> }> = {
  link: {
    color: COLORS.background,
  },
  container: {
    position: 'relative',
    top: '25%',
    width: '80%',
    height: 'min-content',
    left: '10%',
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
