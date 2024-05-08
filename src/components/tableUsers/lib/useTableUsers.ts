import { useCallback, useMemo, useState } from 'react'

import { Header } from '../../../pages/main-page'
import { UserTypes } from '../../../server'
import { ChangeColumnType } from '../Cells/headerCell'

export const useTableUsers = ({ headers, users }: { headers: Header[]; users: UserTypes[] }) => {
  const [headerForTable, setHeaderForTable] = useState(headers)
  const deleteColumn = useCallback(
    (category: string) => {
      const newHeaderForTable = headerForTable.filter(item => item.text !== category)

      setHeaderForTable(newHeaderForTable)
    },
    [headerForTable]
  )
  const changeColumn: ChangeColumnType = useCallback(
    (category, currentColumn) => {
      if (currentColumn) {
        const newHeaderForTable = headerForTable.map(item => {
          if (item.text === category.text) {
            return { ...item, order: currentColumn.order }
          }
          if (item.text === currentColumn.text) {
            return { ...item, order: category.order }
          }

          return item
        })
        const sort = newHeaderForTable.sort((a, b) => a.order - b.order)

        setHeaderForTable(sort)
      }
    },
    [headerForTable]
  )
  const usersList = useCallback(
    (user: UserTypes) => {
      const usersArr = []

      for (let i = 0; i < headerForTable.length; i++) {
        usersArr.push(user[headerForTable[i].text])
      }

      return usersArr
    },
    [headerForTable]
  )
  const usersData = useMemo(() => users.map(el => usersList(el)), [users, usersList])

  return { changeColumn, deleteColumn, headerForTable, usersData }
}
