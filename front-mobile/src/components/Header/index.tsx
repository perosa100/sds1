import React from 'react'
import { Image, Text, View } from 'react-native'
import logo from '../../assets/logo.png'
import { styles } from './styles'

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.tinyLogo} source={logo} />
      <Text style={styles.textLogo1}>Big Game</Text>
      <Text style={styles.textLogo2}>Survey</Text>
    </View>
  )
}

export default Header
