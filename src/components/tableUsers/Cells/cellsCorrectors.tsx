import React from 'react'

import { Header } from '../../../pages/main-page'
import { CellProps } from '../tableUsers'
import { DefaultCell } from './defaultCell'
import { ChangeColumnType, HeaderCell } from './headerCell'
import { SkeletonsCell } from './skeletonsCell'
import { StatusCell } from './statusCell'

export const CellsCorrectors = ({
  changeColumn,
  columnIndex,
  currentColumn,
  deleteColumn,
  header,
  rowIndex,
  setCurrentColumn,
  style,
  usersData,
}: Props) => {
  const userCell = usersData[rowIndex][columnIndex]

  if (rowIndex === 0) {
    return (
      <HeaderCell
        changeColumn={changeColumn}
        columnIndex={columnIndex}
        currentColumn={currentColumn}
        deleteColumn={deleteColumn}
        header={header}
        rowIndex={rowIndex}
        setCurrentColumn={setCurrentColumn}
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
  changeColumn: ChangeColumnType

  currentColumn: Header | null
  deleteColumn: (el: string) => void

  header: Header
  setCurrentColumn: (el: Header) => void
  usersData: string[][]
} & CellProps
