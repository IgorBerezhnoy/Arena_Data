import React, { useCallback } from 'react'

import { Header } from '../../../pages/main-page'
import { ChangeColumnType } from './headerCell'

type DragEvent = React.DragEvent<HTMLDivElement>

export const useHeaderCell = ({ changeColumn, currentColumn, setCurrentColumn }: Created) => {
  const onDragEndHandler = useCallback((e: DragEvent) => {
    // @ts-ignore
    e.target.style.backgroundColor = 'white'
  }, [])
  const onDragLeaveHandler = useCallback((e: DragEvent) => {
    e.preventDefault()
    // @ts-ignore

    e.target.style.backgroundColor = 'white'
  }, [])
  const onDragOverHandler = useCallback((e: DragEvent) => {
    e.preventDefault()
    // @ts-ignore

    e.target.style.backgroundColor = 'lightgray'
  }, [])
  const onDragStartHandler = useCallback(
    (e: DragEvent, header: Header) => {
      // @ts-ignore

      e.target.style.backgroundColor = 'lightgray'
      setCurrentColumn(header)
    },
    [setCurrentColumn]
  )
  const onDropHandler = useCallback(
    (e: DragEvent, header: Header) => {
      changeColumn(header, currentColumn)
      e.preventDefault()
    },
    [changeColumn, currentColumn]
  )

  return {
    onDragEndHandler,
    onDragLeaveHandler,
    onDragOverHandler,
    onDragStartHandler,
    onDropHandler,
  }
}

type Created = {
  changeColumn: ChangeColumnType
  currentColumn: Header | null
  setCurrentColumn: (el: Header) => void
}
