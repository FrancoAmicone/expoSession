import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Screen() {
    return (
        <View style={styles.container}>
          <Text>Soy el screen secudanrio.</Text>
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
      });