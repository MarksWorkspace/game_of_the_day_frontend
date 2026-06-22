import { ChevronLeftIcon, ChevronRightIcon } from './Icons'
import styles from './TonightHeader.module.css'

interface TonightHeaderProps {
  matchupCount: number
  leagues: readonly string[]
  updatedAt: string
  dateLabel: string
}

export function TonightHeader({
  matchupCount,
  leagues,
  updatedAt,
  dateLabel,
}: TonightHeaderProps) {
  const leagueText = leagues.join(', ')

  return (
    <header className={styles.header}>
      <div className={styles.editorial}>
        <h1 className={styles.title}>Tonight&apos;s Games</h1>
        <p className={styles.subtitle}>
          {matchupCount} matchups across the {leagueText}
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
