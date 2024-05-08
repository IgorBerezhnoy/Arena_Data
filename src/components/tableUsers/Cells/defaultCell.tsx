import React, { memo } from 'react'

import { clsx } from 'clsx'

import s from './cell.module.css'

import { CellProps } from '../tableUsers'

export const DefaultCell = memo(({ columnIndex, rowIndex, style, usersData }: Props) => {
  const evenOrNot = rowIndex % 2 === 1

  return (
    <div
      className={clsx(s.gridCell, evenOrNot ? s.even : s.odd)}
      key={rowIndex + columnIndex}
      style={style}
    >
      {usersData[rowIndex][columnIndex]}
    </div>
  )
})
type Props = { usersData: string[][] } & CellProps
