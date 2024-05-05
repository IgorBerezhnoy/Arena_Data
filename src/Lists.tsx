import React from 'react'
import ReactDOM from 'react-dom'
import { FixedSizeGrid as Grid } from 'react-window'

import { Column } from './components/table'

export const Lists = ({ headers }: { headers: Column[] }) => {
  const Cell = ({ columnIndex, style }: { columnIndex: number; rowIndex: number; style: any }) => (
    <div style={style}>{headers[columnIndex].title}</div>
  )

  return (
    <Grid
      className={'Grid'}
      columnCount={headers.length}
      columnWidth={headers.length / 2}
      height={600}
      rowCount={headers.length / 2}
      rowHeight={25}
      width={800}
    >
      {Cell}
    </Grid>
  )
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
