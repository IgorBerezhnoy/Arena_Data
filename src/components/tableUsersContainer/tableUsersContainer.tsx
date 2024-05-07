import React from 'react'

import { UserType } from '../../server/bd/bd.ts'
import { useTableUsers } from './lib/useTableUsers'
import { TableUsers } from './tableUsers'

export default function TableUsersContainer({ fetchNextPage, headers, users }: Props) {
  const { deleteColumn, headerForTable, usersData } = useTableUsers({ headers, users })

  return (
    <TableUsers
      deleteColumn={deleteColumn}
      fetchNextPage={fetchNextPage}
      headers={headerForTable}
      usersData={usersData}
    />
  )
}
type Props = {
  fetchNextPage: () => void
  headers: string[]
  users: UserType[]
}
