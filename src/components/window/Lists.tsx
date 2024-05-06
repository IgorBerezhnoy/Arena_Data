import React from 'react'
import { FixedSizeGrid as Grid } from 'react-window'

import { clsx } from 'clsx'

import s from './lists.module.css'

import { Skeletons } from '../skeletons/skeletons'

export const Lists = ({ data, headers }: Props) => {
  const Cell = ({ columnIndex, rowIndex, style }: CellProps) => {
    if (rowIndex === 0) {
      return (
        <div className={clsx(s.tableHeader, s.gridCell)} key={rowIndex + columnIndex} style={style}>
          {headers[columnIndex]}
        </div>
      )
    } else if (rowIndex === data.length - 2 || rowIndex === data.length - 1) {
      return (
        <div className={clsx(s.gridCell)} key={rowIndex + columnIndex} style={style}>
          <Skeletons />
        </div>
      )
    } else {
      return (
        <div className={clsx(s.gridCell)} key={rowIndex + columnIndex} style={style}>
          {data[rowIndex][columnIndex]}
        </div>
      )
    }
  }

  return (
    <Grid
      className={s.grid}
      columnCount={300}
      columnWidth={150}
      height={600}
      rowCount={data.length}
      rowHeight={50}
      width={1200}
    >
      {Cell}
    </Grid>
  )
}
type Props = {
  data: string[][]
  headers: string[]
  isFetching: boolean
}
type CellProps = {
  columnIndex: number
  isScrolling?: boolean
  rowIndex: number
  style: any
}
// import { FixedSizeList as List } from 'react-window'
//
// import { Column } from './components/table'
//
// export const Lists = ({ headers }: { headers: Column[] }) => {
//   const Row = ({ index, style }: { index: number; style: any }) => {
//     return <div style={style}>Row {headers[index].title}</div>
//   }
//
//   return (
//     <List height={150} itemCount={headers.length} itemSize={35} width={300}>
//       {Row}
//     </List>
//   )
// }
