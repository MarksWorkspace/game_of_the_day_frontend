import type { Team } from '../types/game'
import { teamLogoUrl } from '../data/mockGames'
import styles from './TeamLogo.module.css'

type LogoSize = 'sm' | 'md' | 'lg'

interface TeamLogoProps {
  team: Team
  size?: LogoSize
}

export function TeamLogo({ team, size = 'md' }: TeamLogoProps) {
  return (
    <img
      src={teamLogoUrl(team.logoSlug, team.league)}
      alt=""
      className={`${styles.logo} ${styles[size]}`}
      loading="lazy"
    />
  )
}
