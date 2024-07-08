import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';


export default function HomeScreen() {
    const [fontsLoaded] = useFonts({
        font1: require("../../assets/fonts/Angel.ttf"),
      });
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home.{"\n"}Template.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color:'#fff',
        fontSize: 50,
        fontFamily:'font1',
        textAlign: 'center',
    }
  });