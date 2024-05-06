import { useEffect, useState } from 'react'

export function useDebounce(value: unknown, delay: number | undefined) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay || 300)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}
