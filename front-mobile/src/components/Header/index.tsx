import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import logo from '../../assets/logo.png'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const Header: React.FC = () => {
  const navigation = useNavigation()
  const handleOnPress = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <View style={styles.header1}>
          <Text style={styles.textLogo1}>Big Game</Text>
          <Text style={styles.textLogo2}>Survey</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Header
