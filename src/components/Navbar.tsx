import { useState } from 'react'
import { SearchIcon, StarIcon, UserIcon } from './Icons'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Tonight', href: '#', active: true },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'My Games', href: '#my-games' },
] as const

export function Navbar() {
  const [activeNav, setActiveNav] = useState('Tonight')

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          GAMEDAY
        </a>

        <nav className={styles.nav} aria-label="Main">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={activeNav === label ? styles.navLinkActive : styles.navLink}
              aria-current={activeNav === label ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault()
                setActiveNav(label)
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button type="button" className="btn-icon" aria-label="Search">
            <SearchIcon />
          </button>
          <button type="button" className="btn-icon" aria-label="Favorite teams">
            <StarIcon />
          </button>
          <button type="button" className="btn-icon" aria-label="Profile">
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
