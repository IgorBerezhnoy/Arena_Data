import { useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'

import { getUsers } from '../../../api/api'
import { UserTypes } from '../../../server'

export const useUsers = () => {
  const {
    data: query,
    fetchNextPage,
    isError,
    isLoading,
    // @ts-ignore
  } = useInfiniteQuery({
    getNextPageParam: (lastPage, pages) => (lastPage.users.length > 0 ? pages.length + 1 : null),
    initialPageParam: 0,
    queryFn: getUsers,
    queryKey: ['users'],
  })

  const users = [] as UserTypes[]

  query?.pages.forEach(el => {
    users.push(...el.users[0].users)
  })
  const headers = useMemo(
    () =>
      users.length > 0
        ? Object.keys(users[0]).map((el, i) => ({
            order: i,
            text: el,
          }))
        : [],
    [users]
  )

  return { fetchNextPage, headers, isError, isLoading, users }
}
