import { Navbar } from './components/Navbar'
import { TonightHeader } from './components/TonightHeader'
import { FeaturedGame } from './components/FeaturedGame'
import { GameList } from './components/GameList'
import { PersonalizedSection } from './components/PersonalizedSection'
import { useTonightGames } from './hooks/useTonightGames'
import { PERSONALIZED_USER } from './lib/mapGames'
import styles from './App.module.css'

export default function App() {
  const { data, loading, error, reload } = useTonightGames()

  return (
    <div className="page">
      <Navbar />
      <main className="page-main">
        {loading ? (
          <p className={styles.status} role="status">
            Loading tonight&apos;s games…
          </p>
        ) : null}

        {error ? (
          <div className={styles.error} role="alert">
            <p>{error}</p>
            <button type="button" className="btn-primary" onClick={reload}>
              Try again
            </button>
          </div>
        ) : null}

        {data ? (
          <>
            <TonightHeader
              className="page-tonight-meta"
              matchupCount={data.matchupCount}
              leagues={data.leagues}
              updatedAt={data.updatedAt}
              dateLabel={data.dateLabel}
            />
            {data.featured ? (
              <FeaturedGame game={data.featured} className="page-gotd" />
            ) : null}
            {data.ranked.length > 0 ? (
              <GameList games={data.ranked} className="page-games-list" />
            ) : null}
            {data.personalized ? (
              <PersonalizedSection
                userName={PERSONALIZED_USER}
                pick={data.personalized}
                className="page-personal"
              />
            ) : null}
          </>
        ) : null}
      </main>
    </div>
  )
}
