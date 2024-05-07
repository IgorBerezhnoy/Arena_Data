import React from 'react'

import { clsx } from 'clsx'

import s from './cell.module.css'

export const HeaderCell = ({ columnIndex, deleteColumn, header, rowIndex, style }: Props) => {
  // {/*Todo не забудь поправить*/}
  return (
    <div
      className={clsx(s.tableHeader, s.gridCell)}
      key={rowIndex + columnIndex}
      onDoubleClick={() => deleteColumn(header)}
      style={style}
    >
      {header}
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
