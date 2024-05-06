import React, { useRef } from 'react'
import { FixedSizeGrid as Grid } from 'react-window'

import { clsx } from 'clsx'

import s from './lists.module.css'

import { useDebounce } from '../../hooks/useDebounce'
import { Skeletons } from '../skeletons/skeletons'

export const Lists = ({ data, deleteColumn, fetchNextPage, headers }: Props) => {
  const debounce = useDebounce(fetchNextPage, 300)

  const ref = useRef<any>(null)
  const handleScroll = () => {
    const scrollContainer = ref.current

    if (scrollContainer) {
      const scrollHeight = scrollContainer.scrollHeight
      const clientHeight = scrollContainer.clientHeight
      const scrollOffset = scrollContainer.scrollTop

      if (scrollOffset > 0 && scrollOffset >= scrollHeight - clientHeight - 80) {
        fetchNextPage()
      }
    }
  }

  const Cell = ({ columnIndex, rowIndex, style }: CellProps) => {
    if (rowIndex === 0) {
      const header = headers[columnIndex]

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
      onScroll={handleScroll}
      outerRef={ref}
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
  deleteColumn: (el: string) => void
  fetchNextPage: () => void
  headers: string[]
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
