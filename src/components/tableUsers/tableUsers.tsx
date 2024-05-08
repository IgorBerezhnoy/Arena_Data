import React from 'react'
import { FixedSizeGrid as Grid } from 'react-window'

import s from './tableUsers.module.css'

import { CustomScrollbarsVirtualList } from '../customScrollbars'
import { CellsCorrectors } from './Cells/cellsCorrectors'
import { useHandleScroll } from './lib/useHandleScroll'

export const TableUsers = ({ deleteColumn, fetchNextPage, headers, usersData }: Props) => {
  const { handleScroll, ref } = useHandleScroll(fetchNextPage)
  const Cell = ({ columnIndex, rowIndex, style }: CellProps) => {
    const header = headers[columnIndex]

    return (
      <CellsCorrectors
        columnIndex={columnIndex}
        deleteColumn={deleteColumn}
        header={header}
        rowIndex={rowIndex}
        style={style}
        usersData={usersData}
      />
    )
  }

  return (
    <Grid
      className={s.grid}
      columnCount={headers.length}
      columnWidth={165}
      height={600}
      onScroll={handleScroll}
      outerElementType={CustomScrollbarsVirtualList}
      outerRef={ref}
      rowCount={usersData.length}
      rowHeight={50}
      width={1624}
    >
      {Cell}
    </Grid>
  )
}

type Props = {
  deleteColumn: (el: string) => void
  fetchNextPage: () => void
  headers: string[]
  usersData: string[][]
}
export type CellProps = {
  columnIndex: number
  rowIndex: number
  style: any
}
