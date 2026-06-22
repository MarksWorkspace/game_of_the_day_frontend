import type { ApiGame, ApiGamesResponse } from '../types/api'
import type { FeaturedGame, Game, League, PersonalizedPick, Team } from '../types/game'
import { GAME_EDITORIAL, DEFAULT_LEAGUES, PERSONALIZED_USER } from '../data/gameMeta'
import {
  displayTime,
  formatDateLabel,
  formatUpdatedAt,
  mapLeagueName,
  teamRecordLine,
} from '../lib/format'

export interface TonightGamesViewModel {
  featured: FeaturedGame | null
  ranked: Game[]
  personalized: PersonalizedPick | null
  matchupCount: number
  leagues: readonly string[]
  updatedAt: string
  dateLabel: string
}

function mapTeam(
  apiTeam: ApiGame['teams']['home'],
  league: League,
  teamScore: number,
  statusShort: string,
): Team {
  return {
    name: apiTeam.name,
    logo: apiTeam.logo,
    league,
    record: teamRecordLine(teamScore, statusShort),
  }
}

function mapApiGameToBase(game: ApiGame, editorial: {
  gameScore: number
  reasons: readonly string[]
  network: string
  venue?: string
  rank?: number
  isFavorite?: boolean
}): Game {
  const league = mapLeagueName(game.league.name)

  return {
    id: String(game.id),
    rank: editorial.rank,
    awayTeam: mapTeam(
      game.teams.away,
      league,
      game.scores.away.total,
      game.status.short,
    ),
    homeTeam: mapTeam(
      game.teams.home,
      league,
      game.scores.home.total,
      game.status.short,
    ),
    startTime: displayTime(game.date, game.status),
    network: editorial.network,
    venue: editorial.venue,
    gameScore: editorial.gameScore,
    reasons: [...editorial.reasons],
    isFavorite: editorial.isFavorite,
    statusLabel: game.status.long,
  }
}

export function mapGamesResponse(
  response: ApiGamesResponse,
  fetchedAt = new Date(),
): TonightGamesViewModel {
  const { games, total_available, date } = response
  const featuredApi = games[0] ?? null
  const rankedApi = games.slice(1)

  const featured: FeaturedGame | null = featuredApi
    ? {
        ...mapApiGameToBase(featuredApi, GAME_EDITORIAL.featured),
        selectionReason: GAME_EDITORIAL.featured.selectionReason,
      }
    : null

  const ranked: Game[] = rankedApi.map((game, index) => {
    const editorial = GAME_EDITORIAL.ranked[index] ?? {
      rank: index + 2,
      gameScore: 70 - index,
      reasons: ['Worth watching'],
      network: '—',
    }

    return mapApiGameToBase(game, editorial)
  })

  const personalizedSource = games[1] ?? games[0] ?? null
  const personalized: PersonalizedPick | null = personalizedSource
    ? {
        ...mapApiGameToBase(personalizedSource, {
          ...GAME_EDITORIAL.personalized,
          rank: undefined,
        }),
        preferenceReasons: [...GAME_EDITORIAL.personalized.preferenceReasons],
      }
    : null

  return {
    featured,
    ranked,
    personalized,
    matchupCount: total_available,
    leagues: DEFAULT_LEAGUES,
    updatedAt: formatUpdatedAt(fetchedAt),
    dateLabel: formatDateLabel(date),
  }
}

export { PERSONALIZED_USER }
