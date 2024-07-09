import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const AppIntroduction = ({ navigation }) => {


  return (
    <Onboarding
      onDone={() => navigation.navigate('Home')}
      pages={[
        {
          backgroundColor: '#000',
          title: 'Welcome again to template',
          image: <Image source={require('../assets/1.gif')} />,
          subtitle: 'Done with React Native Onboarding Swiper',
          titleStyles: { ...styles.title },
        },
        {
          backgroundColor: '#000',
          image: <Image source={require('../assets/2.gif')} />,
          title: 'El titulo es importante.',
          subtitle: 'This is the subtitle that sumplements the title.',
          titleStyles: { ...styles.title },
        },
        {
          backgroundColor: '#000',
          image: <Image source={require('../assets/gif.gif')} />,
          title: 'Welcome to the jungle',
          subtitle: "Beautiful, isn't it?",
          titleStyles: { ...styles.title },
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'font1',
    fontSize: 40,
  },
});

export default AppIntroduction;
