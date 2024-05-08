import React, { memo } from 'react'

import { clsx } from 'clsx'

import s from './cell.module.css'

import { ActiveIcon, InactiveIcon } from '../../../assets/icons'
import Inactive_Icon from '../../../assets/icons/inactive_Icon'
import { CellProps } from '../tableUsers'

export const StatusCell = memo(({ columnIndex, rowIndex, status, style, usersData }: Props) => {
  const evenOrNot = rowIndex % 2 === 1

  return (
    <div
      className={clsx(s.gridCell, s.statusCell, evenOrNot ? s.even : s.odd)}
      key={rowIndex + columnIndex}
      style={style}
    >
      {status === 'active' ? (
        <ActiveIcon className={s.icon} />
      ) : (
        <InactiveIcon className={s.icon} />
      )}
      <span className={s[status]}>{usersData[rowIndex][columnIndex]}</span>
    </div>
  )
})
type Props = { status: 'active' | 'inactive'; usersData: string[][] } & CellProps
