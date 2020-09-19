export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION'

export type Game = {
  id: number
  title: string
  platform: Platform
  label: string
  value: number
}
