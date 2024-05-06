import React, { useEffect, useState } from 'react'

import s from './styles/App.module.css'

import { Lists } from './Lists'
import { Column } from './components/table'
import { UserType } from './server/bd/bd.ts'

export default function App() {
  const [users, setUsers] = useState<UserType[]>([])
  const [headers, setHeaders] = useState<Column[]>([])
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers([...users, ...json.users[0].users.users])
        setHeaders(json.users[0].users.headers)
      })
  }, [count])

  const usersList = (user: UserType) => {
    const jsx = []

    for (let i = 0; i < headers.length; i++) {
      jsx.push(user[headers[i].title])
    }

    return jsx
  }
  const data = users.map(el => usersList(el))

  return (
    <>
      <h1 className={s.title}>Users</h1>
      {data.length > 0 && <Lists headers={data} />}
      <button onClick={() => setCount(count + 1)}>add more</button>
      {count}
      {/*<Table>*/}
      {/*  <TableHeader columns={headers} />*/}
      {/*  <TableBody>*/}
      {/*    {users.map(user => {*/}
      {/*      return <TableRow key={user.id}>{usersList(user)}</TableRow>*/}
      {/*    })}*/}
      {/*  </TableBody>*/}
      {/*</Table>*/}
    </>
  )
}
