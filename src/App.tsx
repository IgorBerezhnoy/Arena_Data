import React, { useEffect, useState } from 'react'

import s from './styles/App.module.css'

import { Column, Table, TableBody, TableCell, TableHeader, TableRow } from './components/table'
import { UserType } from './server/bd/bd.ts'

export default function App() {
  const [users, setUsers] = useState<UserType[]>([])
  const [headers, setHeaders] = useState<Column[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(json => {
        console.log(json.users[0])
        setUsers(json.users[0].users.users)
        setHeaders(json.users[0].users.headers)
      })
  }, [])

  const usersList = (user: UserType) => {
    const jsx = []

    for (let i = 0; i < headers.length; i++) {
      jsx.push(<TableCell key={headers[i].key}>{user[headers[i].title]}</TableCell>)
    }

    return jsx
  }

  return (
    <>
      <h1 className={s.title}>Users</h1>
      <Table>
        <TableHeader columns={headers} />
        <TableBody>
          {users.map(user => {
            return <TableRow key={user.id}>{usersList(user)}</TableRow>
          })}
        </TableBody>
      </Table>
    </>
  )
}
