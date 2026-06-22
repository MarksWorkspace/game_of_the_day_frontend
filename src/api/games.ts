import { API_BASE } from '../config'
import type { ApiGamesResponse } from '../types/api'

export async function fetchBaseballGames(date: string): Promise<ApiGamesResponse> {
  const url = `${API_BASE}/api/baseball/games?date=${encodeURIComponent(date)}`
  const res = await fetch(url)

  if (!res.ok) {
    const message = await res.text()
    throw new Error(message || `Failed to load games (${res.status})`)
  }

  return res.json() as Promise<ApiGamesResponse>
}
