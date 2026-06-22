import { ChevronLeftIcon, ChevronRightIcon } from './Icons'
import styles from './TonightHeader.module.css'

interface TonightHeaderProps {
  matchupCount: number
  leagues: readonly string[]
  updatedAt: string
  dateLabel: string
  className?: string
}

export function TonightHeader({
  matchupCount,
  leagues,
  updatedAt,
  dateLabel,
  className,
}: TonightHeaderProps) {
  const leagueText = leagues.join(', ')

  return (
    <header className={[styles.header, className].filter(Boolean).join(' ')}>
      <div className={styles.editorial}>
        <h1 className={styles.title}>Tonight&apos;s Games</h1>
        <p className={styles.subtitle}>
          <span className={styles.subtitleFull}>
            {matchupCount} matchups across the {leagueText}
          </span>
          <span className={styles.subtitleShort}>{matchupCount} matchups</span>
        </p>
        <p className={styles.updated}>Updated at {updatedAt}</p>
      </div>

      <div className={styles.dateControls} aria-label="Date navigation">
        <button type="button" className={styles.dateBtn} aria-label="Previous day">
          <ChevronLeftIcon size={18} />
        </button>
        <span className={styles.dateLabel}>{dateLabel}</span>
        <button type="button" className={styles.dateBtn} aria-label="Next day">
          <ChevronRightIcon size={18} />
        </button>
      </div>
    </header>
  )
}
