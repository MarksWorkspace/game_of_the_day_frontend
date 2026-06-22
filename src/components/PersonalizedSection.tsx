import type { PersonalizedPick } from '../types/game'
import { TeamLogo } from './TeamLogo'
import styles from './PersonalizedSection.module.css'

interface PersonalizedSectionProps {
  userName: string
  pick: PersonalizedPick
}

export function PersonalizedSection({ userName, pick }: PersonalizedSectionProps) {
  const { awayTeam, homeTeam, startTime, network, gameScore, preferenceReasons } = pick

  return (
    <section className={styles.section} aria-labelledby="personalized-heading">
      <h2 id="personalized-heading" className="section-heading">
        Best for {userName}
      </h2>
      <p className={styles.subtitle}>Matched to your teams, players, and viewing preferences</p>

      <div className={styles.card}>
        <div className={styles.matchup}>
          <div className={styles.teamSide}>
            <TeamLogo team={awayTeam} size="md" />
            <div>
              <span className={styles.teamName}>{awayTeam.name}</span>
              <span className={styles.record}>{awayTeam.record}</span>
            </div>
          </div>

          <div className={styles.center}>
            <time className={styles.startTime}>{startTime}</time>
            <span className={styles.network}>{network}</span>
          </div>

          <div className={`${styles.teamSide} ${styles.teamSideRight}`}>
            <div>
              <span className={styles.teamName}>{homeTeam.name}</span>
              <span className={styles.record}>{homeTeam.record}</span>
            </div>
            <TeamLogo team={homeTeam} size="md" />
          </div>

          <div className={styles.scoreBlock}>
            <span className={styles.scoreValue}>{gameScore}</span>
            <span className="label">Game Score</span>
          </div>
        </div>

        <ul className={styles.reasons}>
          {preferenceReasons.map((reason) => (
            <li key={reason} className={styles.reason}>
              <span className={styles.reasonDot} aria-hidden="true" />
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
