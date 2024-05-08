import React from 'react'

import { clsx } from 'clsx'

import s from './cell.module.css'

export const HeaderCell = ({ columnIndex, deleteColumn, header, rowIndex, style }: Props) => {
  return (
    <div className={clsx(s.tableHeader, s.gridCell)} key={rowIndex + columnIndex} style={style}>
      {header}
      <button className={s.deleteColumn} onClick={() => deleteColumn(header)}>
        ✕
      </button>
    </div>
  )
}
type Props = {
  columnIndex: number
  deleteColumn: (el: string) => void
  header: string
  rowIndex: number
  style: any
}
