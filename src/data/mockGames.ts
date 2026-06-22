import type { FeaturedGame, Game, PersonalizedPick } from '../types/game'

export const featuredGame: FeaturedGame = {
  id: 'gotd-1',
  awayTeam: {
    name: 'Denver Nuggets',
    record: '52–30',
    logoSlug: 'den',
    league: 'NBA',
  },
  homeTeam: {
    name: 'Oklahoma City Thunder',
    record: '58–24',
    logoSlug: 'okc',
    league: 'NBA',
  },
  startTime: '9:00 PM',
  network: 'TNT',
  venue: 'Paycom Center',
  gameScore: 92,
  reasons: ['High-scoring matchup', 'Close spread', 'Playoff implications'],
  selectionReason:
    'Top-two Western Conference teams with elite offenses and a tight projected margin.',
}

export const rankedGames: Game[] = [
  {
    id: 'game-2',
    rank: 2,
    awayTeam: {
      name: 'Knicks',
      record: '49–33',
      logoSlug: 'ny',
      league: 'NBA',
    },
    homeTeam: {
      name: 'Celtics',
      record: '61–21',
      logoSlug: 'bos',
      league: 'NBA',
    },
    startTime: '7:30 PM',
    network: 'ESPN',
    gameScore: 87,
    reasons: ['Rivalry', 'Close matchup', 'Star players active'],
  },
  {
    id: 'game-3',
    rank: 3,
    awayTeam: {
      name: 'Panthers',
      record: '52–22–8',
      logoSlug: 'fla',
      league: 'NHL',
    },
    homeTeam: {
      name: 'Rangers',
      record: '55–23–4',
      logoSlug: 'nyr',
      league: 'NHL',
    },
    startTime: '8:00 PM',
    network: 'TNT',
    gameScore: 84,
    reasons: ['Division leaders', 'Goalie duel', 'Playoff preview'],
    isFavorite: true,
  },
  {
    id: 'game-4',
    rank: 4,
    awayTeam: {
      name: 'Dodgers',
      record: '56–32',
      logoSlug: 'lad',
      league: 'MLB',
    },
    homeTeam: {
      name: 'Padres',
      record: '48–40',
      logoSlug: 'sd',
      league: 'MLB',
    },
    startTime: '9:40 PM',
    network: 'MLBN',
    gameScore: 79,
    reasons: ['NL West race', 'Ace matchup', 'High leverage'],
  },
  {
    id: 'game-5',
    rank: 5,
    awayTeam: {
      name: 'Timberwolves',
      record: '49–33',
      logoSlug: 'min',
      league: 'NBA',
    },
    homeTeam: {
      name: 'Suns',
      record: '49–33',
      logoSlug: 'phx',
      league: 'NBA',
    },
    startTime: '10:00 PM',
    network: 'NBA TV',
    gameScore: 76,
    reasons: ['Play-in implications', 'Star forwards', 'Pace advantage'],
  },
]

export const personalizedPick: PersonalizedPick = {
  id: 'personal-1',
  awayTeam: {
    name: 'Bucks',
    record: '48–34',
    logoSlug: 'mil',
    league: 'NBA',
  },
  homeTeam: {
    name: 'Cavaliers',
    record: '64–18',
    logoSlug: 'cle',
    league: 'NBA',
  },
  startTime: '7:00 PM',
  network: 'ESPN',
  gameScore: 81,
  reasons: ['High offensive potential', 'Two top-10 teams', 'Close projected finish'],
  preferenceReasons: [
    'High offensive potential',
    'Two top-10 teams',
    'Close projected finish',
    'Favorite player involved',
  ],
}

export const tonightMeta = {
  matchupCount: 14,
  leagues: ['NBA', 'NHL', 'MLB'] as const,
  updatedAt: '5:42 PM',
  dateLabel: 'Mon, Jun 22',
}

export function teamLogoUrl(slug: string, league: string): string {
  const leaguePath = league.toLowerCase()
  return `https://a.espncdn.com/i/teamlogos/${leaguePath}/500/${slug}.png`
}
