import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './pages/HomeScreen';
import Screen from './pages/Screen';
import AppIntroduction from './AppIntroduction';
import TransitionEffect from './TransitionEffect';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppIntroduction" screenOptions={{
          ...TransitionEffect,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Screen" component={Screen} options={{ headerShown: false }} />
        <Stack.Screen name="AppIntroduction" component={AppIntroduction} options={{ headerShown: false }} />
        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;