import React from 'react'
import AppNavigation from './components/AppNavigator';
import { useFonts } from 'expo-font';
 
export default function App() {
  const [fontsLoaded] = useFonts({
    font1: require("./assets/fonts/Angel.ttf"),
  });

  return (
    <AppNavigation></AppNavigation>
  );
}


