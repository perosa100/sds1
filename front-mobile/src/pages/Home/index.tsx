import React from 'react'
import { Text, View, Image } from 'react-native'

import { styles } from './styles'
import gamerImg from '../../assets/gamer.png'
import { RectButton } from 'react-native-gesture-handler'

import { FontAwesome as Icon } from '@expo/vector-icons'
const Home: React.FC = () => {
  const handleOnPress = () => {}

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.gamerImage} source={gamerImg} />
        <Text style={styles.title}>Vote agora</Text>
        <Text style={styles.subTitle}>Nos diga qual seu jogo preferido!!</Text>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress()}>
          <Text style={styles.buttonText}>Colegar Dados</Text>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="chevron-right" color="#fff" size={25} />
            </Text>
          </View>
        </RectButton>
      </View>
    </>
  )
}

export default Home
