import React, { memo } from 'react'

import { useUsers } from './lib/use-users'
import { MainPage } from './main-page'

export const MainPageContainer = memo(() => {
  const { fetchNextPage, headers, isError, isLoading, users } = useUsers()

  return (
    <MainPage
      error={isError}
      fetchNextPage={fetchNextPage}
      headers={headers}
      isLoading={isLoading}
      users={users}
    />
  )
})
