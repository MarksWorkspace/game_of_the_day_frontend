/** Hardcoded editorial metadata keyed by display rank (1 = featured, 2–5 = list). */
export const GAME_EDITORIAL = {
  featured: {
    gameScore: 92,
    reasons: ['High-scoring matchup', 'Close spread', 'Playoff implications'],
    selectionReason:
      'Top-two Western Conference teams with elite offenses and a tight projected margin.',
    network: 'MLBN',
    venue: undefined as string | undefined,
  },
  ranked: [
    {
      rank: 2,
      gameScore: 87,
      reasons: ['Rivalry', 'Close matchup', 'Star players active'],
      network: 'ESPN',
    },
    {
      rank: 3,
      gameScore: 84,
      reasons: ['Division leaders', 'Goalie duel', 'Playoff preview'],
      network: 'TNT',
      isFavorite: true,
    },
    {
      rank: 4,
      gameScore: 79,
      reasons: ['NL West race', 'Ace matchup', 'High leverage'],
      network: 'MLBN',
    },
    {
      rank: 5,
      gameScore: 76,
      reasons: ['Play-in implications', 'Star forwards', 'Pace advantage'],
      network: 'FOX',
    },
  ],
  personalized: {
    gameScore: 81,
    reasons: ['High offensive potential', 'Two top-10 teams', 'Close projected finish'],
    preferenceReasons: [
      'High offensive potential',
      'Two top-10 teams',
      'Close projected finish',
      'Favorite player involved',
    ],
    network: 'ESPN',
  },
} as const

export const DEFAULT_LEAGUES = ['MLB'] as const

export const PERSONALIZED_USER = 'Mark'
