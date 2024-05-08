import React, { memo } from 'react'
import { FixedSizeGrid as Grid } from 'react-window'

import s from './tableUsers.module.css'

import { Header } from '../../pages/main-page'
import { CustomScrollbarsVirtualList } from '../customScrollbars'
import { CellsCorrectors } from './Cells/cellsCorrectors'
import { ChangeColumnType } from './Cells/headerCell'
import { useHandleScroll } from './lib/useHandleScroll'

export const TableUsers = memo(
  ({ changeColumn, deleteColumn, fetchNextPage, headers, usersData, withTable }: Props) => {
    const [currentColumn, setCurrentColumn] = React.useState<Header | null>(null)

    const { handleScroll, ref } = useHandleScroll(fetchNextPage)

    const Cell = memo(({ columnIndex, rowIndex, style }: CellProps) => {
      const header = headers[columnIndex]

      return (
        <CellsCorrectors
          changeColumn={changeColumn}
          columnIndex={columnIndex}
          currentColumn={currentColumn}
          deleteColumn={deleteColumn}
          header={header}
          rowIndex={rowIndex}
          setCurrentColumn={setCurrentColumn}
          style={style}
          usersData={usersData}
        />
      )
    })

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
        width={withTable}
      >
        {Cell}
      </Grid>
    )
  }
)

type Props = {
  changeColumn: ChangeColumnType
  deleteColumn: (el: string) => void
  fetchNextPage: () => void
  headers: Header[]
  usersData: string[][]
  withTable: number
}
export type CellProps = {
  columnIndex: number
  rowIndex: number
  style: any
}
