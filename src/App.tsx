import { Navbar } from './components/Navbar'
import { TonightHeader } from './components/TonightHeader'
import { FeaturedGame } from './components/FeaturedGame'
import { GameList } from './components/GameList'
import { PersonalizedSection } from './components/PersonalizedSection'
import {
  featuredGame,
  rankedGames,
  personalizedPick,
  tonightMeta,
} from './data/mockGames'

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">
        <TonightHeader
          matchupCount={tonightMeta.matchupCount}
          leagues={tonightMeta.leagues}
          updatedAt={tonightMeta.updatedAt}
          dateLabel={tonightMeta.dateLabel}
        />
        <FeaturedGame game={featuredGame} />
        <GameList games={rankedGames} />
        <PersonalizedSection userName="Mark" pick={personalizedPick} />
      </main>
    </div>
  )
}
