import React from 'react'

import { clsx } from 'clsx'

import s from './cell.module.css'

import { CellProps } from '../tableUsers'

export const DefaultCell = ({ columnIndex, rowIndex, style, usersData }: Props) => {
  return (
    <div className={clsx(s.gridCell)} key={rowIndex + columnIndex} style={style}>
      {usersData[rowIndex][columnIndex]}
    </div>
  )
}
type Props = { usersData: string[][] } & CellProps
