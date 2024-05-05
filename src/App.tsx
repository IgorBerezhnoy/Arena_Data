import React, { useEffect, useState } from 'react'

import './styles/App.css'

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
  }, [])

  return <ul></ul>
}
