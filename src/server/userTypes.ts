export type DataType = {
  users: UserTypes[]
}
export type UserTypes = {
  [key: string]: string
  company: string
  firstName: string
  id: string
  lastName: string
  phone: string
}
