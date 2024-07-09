import { Easing } from 'react-native-reanimated';

const TransitionEffect = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 500,
        easing: Easing.inOut(Easing.poly(4)),
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 600,
        easing: Easing.inOut(Easing.poly(4)),
      },
    },
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
              extrapolate: 'clamp',
            }),
          },
        ],
      },
    };
  },
};

export default TransitionEffect;
