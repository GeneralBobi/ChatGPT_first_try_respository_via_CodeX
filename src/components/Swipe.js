import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

const Swipe = ({ children, onSwipe }) => {
  const [{ x, y, rotate }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotate: 0,
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  const bind = useDrag(({ down, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2;
    if (!down && trigger) {
      onSwipe();
    }

    api.start({
      x: down ? mx : 0,
      y: down ? 0 : 0,
      rotate: mx / 10,
      immediate: down,
    });
  });

  return (
    <animated.div
      {...bind()}
      className="swipe"
      style={{
        x,
        y,
        rotate,
        touchAction: 'none',
      }}
    >
      {children}
    </animated.div>
  );
};

export default Swipe;
