const SCHEDULED_STATUS = new Set(['NS', 'TBD', 'POST', 'CANC', 'INTR', 'ABD'])

export function isLiveOrFinal(statusShort: string): boolean {
  return !SCHEDULED_STATUS.has(statusShort.toUpperCase())
}

export function formatGameTime(isoDate: string): string {
  return new Date(isoDate).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function formatDateLabel(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export function formatUpdatedAt(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function mapLeagueName(name: string): 'MLB' | 'NBA' | 'NHL' {
  const upper = name.toUpperCase()
  if (upper.includes('NBA')) return 'NBA'
  if (upper.includes('NHL')) return 'NHL'
  return 'MLB'
}

export function teamRecordLine(
  teamScore: number,
  statusShort: string,
): string | undefined {
  if (!isLiveOrFinal(statusShort)) return undefined
  return String(teamScore)
}

export function displayTime(isoDate: string, status: { long: string; short: string }): string {
  if (isLiveOrFinal(status.short)) return status.long
  return formatGameTime(isoDate)
}
