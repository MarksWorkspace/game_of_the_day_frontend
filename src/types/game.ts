export type League = 'NBA' | 'NHL' | 'MLB'

export interface Team {
  name: string
  record: string
  logoSlug: string
  league: League
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
}

export interface FeaturedGame extends Game {
  selectionReason: string
}

export interface PersonalizedPick extends Game {
  preferenceReasons: string[]
}
