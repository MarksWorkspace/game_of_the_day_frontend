export interface ApiGameStatus {
  long: string
  short: string
}

export interface ApiGameLeague {
  id: number
  name: string
  season: number
}

export interface ApiGameTeam {
  id: number
  name: string
  logo: string
}

export interface ApiGameTeamScores {
  total: number
  hits: number
  errors: number
}

export interface ApiGame {
  id: number
  date: string
  time: string
  status: ApiGameStatus
  league: ApiGameLeague
  teams: {
    home: ApiGameTeam
    away: ApiGameTeam
  }
  scores: {
    home: ApiGameTeamScores
    away: ApiGameTeamScores
  }
}

export interface ApiGamesResponse {
  date: string
  total_available: number
  count: number
  games: ApiGame[]
}
