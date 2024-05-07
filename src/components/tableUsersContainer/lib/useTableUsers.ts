import { useState } from 'react'

import { UserType } from '../../../server'

export const useTableUsers = ({ headers, users }: { headers: string[]; users: UserType[] }) => {
  const [headerForTable, setHeaderForTable] = useState(headers)
  const deleteColumn = (category: string) => {
    const newHeaderForTable = headerForTable.filter(item => item !== category)

    setHeaderForTable(newHeaderForTable)
  }
  const usersList = (user: UserType) => {
    const usersArr = []

    for (let i = 0; i < headerForTable.length; i++) {
      usersArr.push(user[headerForTable[i]])
    }

    return usersArr
  }
  const usersData = users.map(el => usersList(el))

  return { deleteColumn, headerForTable, usersData }
}
