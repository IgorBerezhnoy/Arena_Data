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

import { Lists } from './components/window/Lists'
import { DataType, UserType } from './server/bd/bd.ts'

export default function App2({
  fetchNextPage,
  headers,
  users,
}: {
  fetchNextPage: () => void
  headers: string[]
  users: UserType[]
}) {
  const [headerForTable, setHeaderForTable] = React.useState(headers)
  const deleteColumn = (el: string) => {
    const newHeaderForTable = headerForTable.filter(item => item !== el)

    setHeaderForTable(newHeaderForTable)
  }
  const usersList = (user: UserType) => {
    const jsx = []

    for (let i = 0; i < headerForTable.length; i++) {
      jsx.push(user[headerForTable[i]])
    }

    return jsx
  }
  const data = users.map(el => usersList(el))

  return (
    <>
      <Lists
        data={data}
        deleteColumn={deleteColumn}
        fetchNextPage={fetchNextPage}
        headers={headerForTable}
      />
    </>
  )
}
