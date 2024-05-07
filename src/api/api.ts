import { QueryFunctionContext } from 'react-query'

import { DataType } from '../server/bd/bd.ts'

const baseAPI = `/api/`

export const getUsers = async ({
  pageParam,
}: QueryFunctionContext<string[], any>): Promise<{ users: DataType[] }> => {
  const res = await fetch(`${baseAPI}users?page=${pageParam}`)

  return await res.json()
}
