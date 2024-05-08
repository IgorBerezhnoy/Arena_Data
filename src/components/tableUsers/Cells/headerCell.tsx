import React, { memo } from 'react'

import { clsx } from 'clsx'

import s from './cell.module.css'

import { Header } from '../../../pages/main-page'
import { useHeaderCell } from './useHeaderCell'

export const HeaderCell = memo(
  ({
    changeColumn,
    columnIndex,
    currentColumn,
    deleteColumn,
    header,
    rowIndex,
    setCurrentColumn,
    style,
  }: Props) => {
    const {
      onDragEndHandler,
      onDragLeaveHandler,
      onDragOverHandler,
      onDragStartHandler,
      onDropHandler,
    } = useHeaderCell({ changeColumn, currentColumn, setCurrentColumn })

    return (
      <div
        className={clsx(s.tableHeader, s.gridCell)}
        draggable
        key={rowIndex + columnIndex}
        onDragEnd={e => onDragEndHandler(e)}
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
)
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
