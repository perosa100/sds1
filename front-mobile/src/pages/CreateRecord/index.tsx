import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { TextInput, RectButton } from 'react-native-gesture-handler'
import Header from '../../components/Header'

import { styles, stylesPicker } from './styles'
import PlatformCard from './PlatformCard'
import { Platform, Game } from './types'
import RNPickerSelect from 'react-native-picker-select'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import api from './../../config/api'

const placeholder = {
  label: 'Selecione o Game',
  value: null
}

const mapSelectValues = (games: Game[]) => {
  return games.map((game) => ({
    ...game,
    label: game.title,
    value: game.id
  }))
}
const CreateRecord: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>()
  const [selectedGame, setSelectedGame] = useState('')
  const [allGames, setAllGames] = useState<Game[]>([])
  const [filteredGames, setFilteredGames] = useState<Game[]>([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const handleChangePlatform = (selectedPlatform: Platform) => {
    setPlatform(selectedPlatform)

    const gamesByPlatform = allGames.filter(
      (game) => game.platform === selectedPlatform
    )

    setFilteredGames(gamesByPlatform)
  }

  const handleSubmit = () => {
    const payload = { name, age: Number(age), gameId: selectedGame }

    api
      .post('records', payload)
      .then(() => {
        Alert.alert('Dados salvos com sucesso')
        setName('')
        setAge('')
        setSelectedGame('')
        setPlatform(undefined)
      })
      .catch(() => Alert.alert('Erro ao salvar os dados'))
  }
  useEffect(() => {
    api
      .get('games')
      .then((response) => {
        const selectedValues = mapSelectValues(response.data)
        setAllGames(selectedValues)
      })
      .catch(() => Alert.alert('Erro ao listar os dados'))
  }, [])

  return (
    <>
      <Header />

      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          placeholder="Nome"
          placeholderTextColor="#9e9e9e"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Idade"
          placeholderTextColor="#9e9e9e"
          keyboardType="numeric"
          maxLength={3}
          onChangeText={(text) => setAge(text)}
          value={age}
        />

        <View style={styles.platformContainer}>
          <PlatformCard
            platform="PC"
            icon="laptop"
            onChange={handleChangePlatform}
            activePlatform={platform}
          />
          <PlatformCard
            platform="XBOX"
            icon="xbox"
            onChange={handleChangePlatform}
            activePlatform={platform}
          />
          <PlatformCard
            platform="PLAYSTATION"
            icon="playstation"
            onChange={handleChangePlatform}
            activePlatform={platform}
          />
        </View>

        <RNPickerSelect
          onValueChange={(value) => setSelectedGame(value)}
          placeholder={placeholder}
          value={selectedGame}
          items={filteredGames}
          style={stylesPicker}
          Icon={() => {
            return <Icon name="chevron-down" size={25} color="#9e9e9e" />
          }}
        />

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Salvar</Text>
          </RectButton>
        </View>
      </View>
    </>
  )
}

export default CreateRecord
