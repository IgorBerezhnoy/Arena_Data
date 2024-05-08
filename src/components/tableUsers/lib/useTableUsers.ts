import { useState } from 'react'

import { Header } from '../../../pages/main-page'
import { UserType } from '../../../server'
import { ChangeColumnType } from '../Cells/headerCell'

export const useTableUsers = ({ headers, users }: { headers: Header[]; users: UserType[] }) => {
  const [headerForTable, setHeaderForTable] = useState(headers)
  const deleteColumn = (category: string) => {
    const newHeaderForTable = headerForTable.filter(item => item.text !== category)

    setHeaderForTable(newHeaderForTable)
  }
  const changeColumn: ChangeColumnType = (category, currentColumn) => {
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
  }
  const usersList = (user: UserType) => {
    const usersArr = []

    for (let i = 0; i < headerForTable.length; i++) {
      usersArr.push(user[headerForTable[i].text])
    }

    return usersArr
  }
  const usersData = users.map(el => usersList(el))

  return { changeColumn, deleteColumn, headerForTable, usersData }
}
