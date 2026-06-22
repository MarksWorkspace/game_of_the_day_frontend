import type { FeaturedGame as FeaturedGameType } from '../types/game'
import { TeamLogo } from './TeamLogo'
import styles from './FeaturedGame.module.css'

interface FeaturedGameProps {
  game: FeaturedGameType
}

export function FeaturedGame({ game }: FeaturedGameProps) {
  const { awayTeam, homeTeam, startTime, network, venue, gameScore, reasons, selectionReason } =
    game

  return (
    <section className={styles.featured} aria-labelledby="gotd-heading">
      <div className={styles.texture} aria-hidden="true" />

      <div className={styles.topRow}>
        <span id="gotd-heading" className={`label label-accent ${styles.badge}`}>
          Game of the Day
        </span>
        <time className={styles.startTime}>{startTime}</time>
      </div>

      <div className={styles.accentLine} aria-hidden="true" />

      <div className={styles.matchup}>
        <div className={styles.teamBlock}>
          <TeamLogo team={awayTeam} size="lg" />
          <span className={styles.teamName}>{awayTeam.name}</span>
          <span className={styles.record}>{awayTeam.record}</span>
        </div>

        <span className={styles.vs}>VS</span>

        <div className={`${styles.teamBlock} ${styles.teamBlockRight}`}>
          <TeamLogo team={homeTeam} size="lg" />
          <span className={styles.teamName}>{homeTeam.name}</span>
          <span className={styles.record}>{homeTeam.record}</span>
        </div>
      </div>

      <div className={styles.scoreBlock}>
        <span className={styles.scoreValue}>{gameScore}</span>
        <span className="label">Game Score</span>
      </div>

      <p className={styles.reasons}>{reasons.join(' • ')}</p>
      <p className={styles.selectionReason}>{selectionReason}</p>

      <div className={styles.footer}>
        <button type="button" className="btn-primary">
          View matchup
        </button>
        <span className={styles.broadcast}>
          {network}
          {venue ? ` • ${venue}` : ''}
        </span>
      </div>
    </section>
  )
}
