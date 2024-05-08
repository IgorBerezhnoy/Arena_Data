import React from 'react'

import { useSize } from '../../hooks'
import { Header } from '../../pages/main-page'
import { UserType } from '../../server'
import { useTableUsers } from './lib/useTableUsers'
import { TableUsers } from './tableUsers'

export function TableUsersContainer({ fetchNextPage, headers, users }: Props) {
  const { changeColumn, deleteColumn, headerForTable, usersData } = useTableUsers({
    headers,
    users,
  })
  const windowSize = useSize()
  const withTable = windowSize[1] > 1720 ? 1624 : windowSize[1] - 100

  return (
    <TableUsers
      changeColumn={changeColumn}
      deleteColumn={deleteColumn}
      fetchNextPage={fetchNextPage}
      headers={headerForTable}
      usersData={usersData}
      withTable={withTable}
    />
  )
}

type Props = {
  fetchNextPage: () => void
  headers: Header[]
  users: UserType[]
}
