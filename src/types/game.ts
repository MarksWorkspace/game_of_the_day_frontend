export type League = 'NBA' | 'NHL' | 'MLB'

export interface Team {
  name: string
  logo: string
  league: League
  record?: string
}

export interface Game {
  id: string
  rank?: number
  awayTeam: Team
  homeTeam: Team
  startTime: string
  network: string
  venue?: string
  gameScore: number
  reasons: string[]
  isFavorite?: boolean
  statusLabel?: string
}

export interface FeaturedGame extends Game {
  selectionReason: string
}

export interface PersonalizedPick extends Game {
  preferenceReasons: string[]
}
