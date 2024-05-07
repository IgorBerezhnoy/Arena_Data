import React from 'react'

import { UserType } from '../../../server/bd/bd.ts'

export const useTableUsers = ({ headers, users }: { headers: string[]; users: UserType[] }) => {
  const [headerForTable, setHeaderForTable] = React.useState(headers)
  const deleteColumn = (el: string) => {
    const newHeaderForTable = headerForTable.filter(item => item !== el)

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
