import React, { useEffect, useState } from 'react'

import s from './styles/App.module.css'

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(json => {
        console.log(json.users[0].users)
        setUsers(json.users[0].users)
      })
  }, [])

  return (
    <>
      aaa
      <ul className={s.h1}>{JSON.stringify(users)}</ul>
    </>
  )
}
