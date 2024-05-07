import React from 'react'

import { clsx } from 'clsx'

import s from './cell.module.css'

import { Skeletons } from '../../skeletons/skeletons'
import { CellProps } from '../tableUsers'

export const SkeletonsCell = ({ columnIndex, rowIndex, style }: CellProps) => {
  return (
    <div className={clsx(s.gridCell)} key={rowIndex + columnIndex} style={style}>
      <Skeletons />
    </div>
  )
}
