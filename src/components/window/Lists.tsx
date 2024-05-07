import React, { ReactNode, useCallback, useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { FixedSizeGrid as Grid } from 'react-window'

import { clsx } from 'clsx'

import '../../list.css'

import s from './lists.module.css'

import { useDebounce } from '../../hooks/useDebounce'
import { Skeletons } from '../skeletons/skeletons'

const CustomScrollbars = ({ children, forwardedRef, onScroll, style }: CustomScrollbarsProps) => {
  const refSetter = useCallback((scrollbarsRef: { view: any }) => {
    if (scrollbarsRef) {
      forwardedRef(scrollbarsRef.view)
    } else {
      forwardedRef(null)
    }
  }, [])

  return (
    <Scrollbars
      onScroll={onScroll}
      // @ts-ignore
      ref={refSetter}
      style={{ ...style, overflow: 'hidden' }}
    >
      {children}
    </Scrollbars>
  )
}

const CustomScrollbarsVirtualList = React.forwardRef((props, ref) => (
  <CustomScrollbars {...props} forwardedRef={ref} />
))

export const Lists = ({ deleteColumn, fetchNextPage, headers, usersData }: Props) => {
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
    } else if (rowIndex === usersData.length - 2 || rowIndex === usersData.length - 1) {
      return (
        <div className={clsx(s.gridCell)} key={rowIndex + columnIndex} style={style}>
          <Skeletons />
        </div>
      )
    } else {
      return (
        <div className={clsx(s.gridCell)} key={rowIndex + columnIndex} style={style}>
          {usersData[rowIndex][columnIndex]}
        </div>
      )
    }
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
type CellProps = {
  columnIndex: number
  isScrolling?: boolean
  rowIndex: number
  style: any
}
type CustomScrollbarsProps = {
  children?: ReactNode
  forwardedRef: any
  onScroll?: any
  style?: any
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
