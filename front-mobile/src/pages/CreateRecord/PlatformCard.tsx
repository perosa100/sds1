import React from 'react'
import { Text } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { styles } from './styles'
import { Platform } from './types'
import { RectButton } from 'react-native-gesture-handler'

type Props = {
  platform: Platform
  onChange: (platform: Platform) => void
  icon: string
  activePlatform?: Platform
}

const PlatformCard: React.FC<Props> = ({
  platform,
  onChange,
  icon,
  activePlatform
}: Props) => {
  const isActive = platform === activePlatform
  const backgroundColor = isActive ? '#fad7c8' : '#fff'
  const textColor = isActive ? '#ed7947' : '#9e9e9e'

  return (
    <RectButton
      style={[styles.platformCard, { backgroundColor }]}
      onPress={() => {
        onChange(platform)
      }}
    >
      <Icon name={icon} size={60} color={textColor} />
      <Text style={[styles.platformCardText, { color: textColor }]}>
        {platform === 'PLAYSTATION' ? 'PS' : platform}
      </Text>
    </RectButton>
  )
}

export default PlatformCard
