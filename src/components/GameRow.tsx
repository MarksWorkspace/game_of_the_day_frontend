import { useState } from 'react'
import type { Game } from '../types/game'
import { TeamLogo } from './TeamLogo'
import { StarIcon } from './Icons'
import styles from './GameRow.module.css'

interface GameRowProps {
  game: Game
}

export function GameRow({ game }: GameRowProps) {
  const [isFavorite, setIsFavorite] = useState(game.isFavorite ?? false)
  const { rank, awayTeam, homeTeam, startTime, network, gameScore, reasons } = game

  return (
    <article className={styles.row}>
      <div className={styles.mainLine}>
        <span className={styles.rank}>{rank}</span>

        <div className={styles.awayTeam}>
          <TeamLogo team={awayTeam} size="sm" />
          <div className={styles.teamInfo}>
            <span className={styles.teamName}>{awayTeam.name}</span>
            {awayTeam.record ? (
              <span className={styles.record}>{awayTeam.record}</span>
            ) : null}
          </div>
        </div>

        <div className={styles.center}>
          <time className={styles.startTime}>{startTime}</time>
          <span className={styles.network}>{network}</span>
        </div>

        <div className={styles.homeTeam}>
          <div className={styles.teamInfo}>
            <span className={styles.teamName}>{homeTeam.name}</span>
            {homeTeam.record ? (
              <span className={styles.record}>{homeTeam.record}</span>
            ) : null}
          </div>
          <TeamLogo team={homeTeam} size="sm" />
        </div>

        <div className={styles.scoreCol}>
          <span className={styles.scoreValue}>{gameScore}</span>
          <span className="label">Game Score</span>
        </div>

        <button
          type="button"
          className={`btn-icon ${isFavorite ? 'is-active' : ''} ${styles.favoriteBtn}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((prev) => !prev)}
        >
          <StarIcon size={18} />
        </button>
      </div>

      <div className={styles.mobileLine}>
        <div className={styles.mobileHeader}>
          <span className={styles.rank}>{rank}</span>
          <div className={styles.mobileMatchup}>
            <span className={styles.mobileTeam}>{awayTeam.name}</span>
            <span className={styles.mobileVs}>vs</span>
            <span className={styles.mobileTeam}>{homeTeam.name}</span>
          </div>
          <span className={styles.mobileScore}>{gameScore}</span>
          <button
            type="button"
            className={`btn-icon ${isFavorite ? 'is-active' : ''} ${styles.mobileFavorite}`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
            onClick={() => setIsFavorite((prev) => !prev)}
          >
            <StarIcon size={16} />
          </button>
        </div>
        <div className={styles.mobileMeta}>
          <time className={styles.startTime}>{startTime}</time>
          <span className={styles.metaDot} aria-hidden="true">
            ·
          </span>
          <span className={styles.network}>{network}</span>
        </div>
        <p className={styles.mobileReasons}>{reasons.join(' · ')}</p>
      </div>
    </article>
  )
}
