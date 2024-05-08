import React from 'react'

import { CellProps } from '../tableUsers'
import { DefaultCell } from './defaultCell'
import { HeaderCell } from './headerCell'
import { SkeletonsCell } from './skeletonsCell'
import { StatusCell } from './statusCell'

export const CellsCorrectors = ({
  columnIndex,
  deleteColumn,
  header,
  rowIndex,
  style,
  usersData,
}: Props) => {
  const userCell = usersData[rowIndex][columnIndex]

  if (rowIndex === 0) {
    return (
      <HeaderCell
        columnIndex={columnIndex}
        deleteColumn={deleteColumn}
        header={header}
        rowIndex={rowIndex}
        style={style}
      />
    )
  } else if (rowIndex >= usersData.length - 2) {
    return <SkeletonsCell columnIndex={columnIndex} rowIndex={rowIndex} style={style} />
  } else {
    if (userCell === 'active' || userCell === 'inactive') {
      return (
        <StatusCell
          columnIndex={columnIndex}
          rowIndex={rowIndex}
          status={userCell}
          style={style}
          usersData={usersData}
        />
      )
    } else {
      return (
        <DefaultCell
          columnIndex={columnIndex}
          rowIndex={rowIndex}
          style={style}
          usersData={usersData}
        />
      )
    }
  }
}
type Props = {
  deleteColumn: (el: string) => void
  header: string
  usersData: string[][]
} & CellProps
