import React from 'react'

import { UserType } from '../../server/bd/bd.ts'
import { Lists } from '../window/Lists'
import { useTableUsers } from './lib/useTableUsers'

export default function TableUsersContainer({ fetchNextPage, headers, users }: Props) {
  const { deleteColumn, headerForTable, usersData } = useTableUsers({ headers, users })

  return (
    <Lists
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
