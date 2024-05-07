import { useInfiniteQuery } from 'react-query'

import { getUsers } from '../../../api/api'
import { UserType } from '../../../server/bd/bd.ts'

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

  const users = [] as UserType[]

  query?.pages.forEach(el => {
    users.push(...el.users[0].users)
  })
  const headers = users.length > 0 ? Object.keys(users[0]) : []

  return { fetchNextPage, headers, isError, isLoading, users }
}
