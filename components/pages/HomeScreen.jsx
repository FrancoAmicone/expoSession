import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola fncmicn,{"\n"}Bienvenido de nuevo. {"\n"}Manos a la</Text>
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
        fontSize: 20,
    }
  });