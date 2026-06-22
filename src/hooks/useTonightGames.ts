import { useCallback, useEffect, useState } from 'react'
import { fetchBaseballGames } from '../api/games'
import { DEFAULT_GAME_DATE } from '../config'
import { mapGamesResponse, type TonightGamesViewModel } from '../lib/mapGames'

interface UseTonightGamesResult {
  data: TonightGamesViewModel | null
  loading: boolean
  error: string | null
  reload: () => void
}

export function useTonightGames(date = DEFAULT_GAME_DATE): UseTonightGamesResult {
  const [data, setData] = useState<TonightGamesViewModel | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadToken, setReloadToken] = useState(0)

  const reload = useCallback(() => {
    setReloadToken((token) => token + 1)
  }, [])

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetchBaseballGames(date)
        if (cancelled) return
        setData(mapGamesResponse(response))
      } catch (err) {
        if (cancelled) return
        setError(err instanceof Error ? err.message : 'Failed to load games')
        setData(null)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [date, reloadToken])

  return { data, loading, error, reload }
}
