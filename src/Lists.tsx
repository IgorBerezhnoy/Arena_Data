import React from 'react'
import ReactDOM from 'react-dom'
import { FixedSizeGrid as Grid } from 'react-window'

import { Column } from './components/table'

export const Lists = ({ headers }: { headers: string[][] }) => {
  const Cell = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number
    rowIndex: number
    style: any
  }) => {
    return (
      <div key={rowIndex + columnIndex} style={style}>
        {headers[rowIndex][columnIndex]}
      </div>
    )
  }

  return (
    <Grid
      className={'Grid'}
      columnCount={300}
      columnWidth={200}
      height={600}
      rowCount={headers.length}
      rowHeight={50}
      width={1200}
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
