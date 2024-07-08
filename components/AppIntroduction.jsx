import { Image } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const AppIntroduction = ({navigation}) => (
  <Onboarding
    onDone={() => navigation.navigate('Home')}
    pages={[
      {
        backgroundColor: '#fff',
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fe6e58',
        title: 'The Title',
        subtitle: 'This is the subtitle that sumplements the title.',
      },
      {
        backgroundColor: '#999',
        title: 'Triangle',
        subtitle: "Beautiful, isn't it?",
      },
    ]}
  />
);

export default AppIntroduction;