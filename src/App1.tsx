// import React, { useState } from 'react'
// import { useQuery } from 'react-query'
//
// import s from './styles/App.module.css'
//
// import { Column } from './components/table'
// import { Lists } from './components/window/Lists'
// import { DataType, UserType } from './server/bd/bd.ts'
//
// export default function App1() {
//   const [count, setCount] = useState(1)
//   const getUsers = async (page = 1): Promise<{ users: DataType[] }> => {
//     const res = await fetch(`/api/users?page=${page}`)
//     const json = await res.json()
//
//     debugger
//
//     return json
//   }
//   const {
//     data: query,
//     isError,
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryFn: () => getUsers(count),
//     queryKey: ['users'],
//   })
//   const users = query?.users[0].users ? query?.users[0].users : []
//   const headers = query?.users[0].headers ? query?.users[0].headers : []
//   const usersList = (user: UserType) => {
//     const jsx = []
//
//     for (let i = 0; i < headers.length; i++) {
//       jsx.push(user[headers[i].title])
//     }
//
//     return jsx
//   }
//   const data = users.map(el => usersList(el))
//
//   return (
//     <>
//       <h1 className={s.title}>Users</h1>
//       {query && <h1 className={s.title}>query</h1>}
//       {data.length > 0 && headers.length > 0 && <Lists data={data} headers={headers} />}
//       <button onClick={() => setCount(count + 1)}>add more</button>
//       {count}
//       {isLoading && <div>Loading</div>}
//       {isError && <div>isError</div>}
//     </>
//   )
// }

import React from 'react'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query'

import s from './styles/App.module.css'

import App2 from './App2'
import { MainHeader } from './components/header/mainHeader'
import { DataType, UserType } from './server/bd/bd.ts'

export default function App1() {
  const getUsers = async ({
    pageParam,
  }: QueryFunctionContext<string[], any>): Promise<{ users: DataType[] }> => {
    const res = await fetch(`/api/users?page=${pageParam}`)
    const json = await res.json()

    return json
  }
  const {
    data: query,
    error,
    fetchNextPage,
    isFetching,
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

  return (
    <>
      <MainHeader />
      <div className={s.container}>
        <h1 className={s.title}>Users</h1>
        {query && <h1 className={s.title}>query</h1>}
        {users.length > 0 && headers.length > 0 && (
          <App2 fetchNextPage={fetchNextPage} headers={headers} users={users} />
        )}
        {isFetching && <div>Loading</div>}
      </div>
      {error && <div>isError</div>}
    </>
  )
}
