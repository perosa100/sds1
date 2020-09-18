import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { AppLoading } from 'expo'

import {
  useFonts,
  Play_400Regular,
  Play_700Bold
} from '@expo-google-fonts/play'

import Routes from './src/routes'

export default function App() {
  let [fontsLoader] = useFonts({
    Play_400Regular,
    Play_700Bold
  })

  if (!fontsLoader) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Routes />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1f34'
  }
})
