import React from 'react'

import { clsx } from 'clsx'

import s from './cell.module.css'

import { Header } from '../../../pages/main-page'

type DragEvent = React.DragEvent<HTMLDivElement>
export const HeaderCell = ({
  changeColumn,
  columnIndex,
  currentColumn,
  deleteColumn,
  header,
  rowIndex,
  setCurrentColumn,
  style,
}: Props) => {
  const onDragEndHandler = (e: DragEvent) => {
    // @ts-ignore
    e.target.style.backgroundColor = 'white'
  }
  const onDragLeaveHandler = (e: DragEvent) => {
    e.preventDefault()
    // @ts-ignore

    e.target.style.backgroundColor = 'white'
  }
  const onDragOverHandler = (e: DragEvent) => {
    e.preventDefault()
    // @ts-ignore

    e.target.style.backgroundColor = 'lightgray'
  }
  const onDragStartHandler = (e: DragEvent, header: Header) => {
    // @ts-ignore

    e.target.style.backgroundColor = 'lightgray'
    setCurrentColumn(header)
  }
  const onDropHandler = (e: DragEvent, header: Header) => {
    changeColumn(header, currentColumn)
    e.preventDefault()
  }

  return (
    <div
      className={clsx(s.tableHeader, s.gridCell)}
      draggable
      key={rowIndex + columnIndex}
      onDragEnd={onDragEndHandler}
      onDragLeave={e => onDragLeaveHandler(e)}
      onDragOver={e => onDragOverHandler(e)}
      onDragStart={e => onDragStartHandler(e, header)}
      onDrop={e => onDropHandler(e, header)}
      style={style}
    >
      {header.text}
      <button className={s.deleteColumn} onClick={() => deleteColumn(header.text)}>
        ✕
      </button>
    </div>
  )
}
export type ChangeColumnType = (header: Header, currentColumn: Header | null) => void
type Props = {
  changeColumn: ChangeColumnType
  columnIndex: number
  currentColumn: Header | null
  deleteColumn: (el: string) => void
  header: Header
  rowIndex: number
  setCurrentColumn: (el: Header) => void
  style: any
}
