import React from 'react';
import { animated, config, useSpring, useTrail } from 'react-spring';
import injectSheet from 'react-jss';

import styleSheet from './Wave.css';

type Next<T> = (args: T) => Promise<T>;
interface Props {
  classes: {
    [key: string]: string;
  };
}
const getCount = () => {
  const count =
    Math.floor(document.body.clientWidth / (2 * styleSheet.box.width)) - 2;
  return count;
};

const SineWave: React.FunctionComponent<Props> = ({ classes }) => {
  // TODO: this value should change on window resize
  const count = getCount();

  const fromPosition = {
    top: 200,
  };
  const toPosition = {
    top: 0,
  };
  const transition = async (next: Next<any>) => {
    while (true) {
      await next(toPosition);
      await next(fromPosition);
    }
  };
  const trail = useTrail(count, {
    config: config.gentle,
    from: fromPosition,
    to: transition,
  });
  const rainbowBackground = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
  ];
  const rainbowBorder = [
    'darkred',
    'darkorange',
    'darkkhaki',
    'darkgreen',
    'darkblue',
    'indigo',
  ];
  const color = useSpring({
    from: {
      borderColor: rainbowBorder[0],
      backgroundColor: rainbowBackground[0],
    },
    to: async (next: Next<any>) => {
      while (true) {
        for (let i = 1; i < rainbowBorder.length; i++) {
          await next({
            borderColor: rainbowBorder[i],
            backgroundColor: rainbowBackground[i],
          });
        }
        for (let i = rainbowBorder.length - 2; i >= 0; i--) {
          await next({
            borderColor: rainbowBorder[i],
            backgroundColor: rainbowBackground[i],
          });
        }
      }
    },
  });

  const children = [];
  for (let i = 0; i < count; i++) {
    children.push(
      <animated.div
        key={i}
        className={classes.box}
        style={{
          left: i * styleSheet.box.width,
          ...trail[i],
          ...color,
        }}
      />
    );
  }
  for (let i = 1; i < count; i++) {
    children.push(
      <animated.div
        key={count + i}
        className={classes.box}
        style={{
          left: (count + i - 1) * styleSheet.box.width,
          ...trail[count - 1 - i],
          ...color,
        }}
      />
    );
  }

  const height = fromPosition.top + styleSheet.box.height;
  return (
    <div
      className={classes.container}
      style={{
        width: (2 * count - 1) * styleSheet.box.width,
        height,
      }}
    >
      {children}
    </div>
  );
};

export default injectSheet(styleSheet)(React.memo(SineWave));
