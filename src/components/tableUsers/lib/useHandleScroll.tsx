import { useCallback, useRef } from 'react'

export const useHandleScroll = (fetchNextPage: () => void) => {
  const ref = useRef<any>(null)
  const handleScroll = useCallback(() => {
    const scrollContainer = ref.current

    if (scrollContainer) {
      const scrollHeight = scrollContainer.scrollHeight
      const clientHeight = scrollContainer.clientHeight
      const scrollOffset = scrollContainer.scrollTop

      if (scrollOffset > 0 && scrollOffset >= scrollHeight - clientHeight - 80) {
        fetchNextPage()
      }
    }
  }, [fetchNextPage])

  return { handleScroll, ref }
}
