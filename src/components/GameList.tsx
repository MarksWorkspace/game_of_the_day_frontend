import type { Game } from '../types/game'
import { GameRow } from './GameRow'
import styles from './GameList.module.css'

interface GameListProps {
  games: Game[]
}

export function GameList({ games }: GameListProps) {
  return (
    <section className={styles.section} aria-labelledby="best-games-heading">
      <h2 id="best-games-heading" className="section-heading">
        Best Games Tonight
      </h2>
      <div className={styles.list}>
        {games.map((game) => (
          <GameRow key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}
