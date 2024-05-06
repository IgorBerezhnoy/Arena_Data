import { faker, simpleFaker } from '@faker-js/faker'

export const getDataFromBD = () => {
  const numberOfElements = 25 // Количество элементов
  const numberOfProperties = 300 // Количество свойств

  const data: DataType = { users: [] }

  for (let i = 0; i < numberOfElements; i++) {
    const element = {} as UserType

    element.firstName = faker.person.firstName()
    element.lastName = faker.person.lastName()
    element.company = faker.company.name()
    element.phone = faker.phone.number()
    for (let j = 0; j < numberOfProperties; j++) {
      element[`property_${j}`] = faker.lorem.word()
    }
    element['id'] = simpleFaker.string.uuid()

    data.users.push(element)
  }

  return data
}

export type DataType = {
  users: UserType[]
}

export type UserType = {
  [key: string]: string
  company: string
  firstName: string
  id: string
  lastName: string
  phone: string
}
