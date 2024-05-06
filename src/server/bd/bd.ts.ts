import { faker, simpleFaker } from '@faker-js/faker'

export const getDataFromBD = () => {
  const numberOfElements = 25 // Количество элементов
  const numberOfProperties = 300 // Количество свойств

  const data: DataType = { headers: [], users: [] }

  for (let i = 0; i < numberOfElements; i++) {
    const element = {} as UserType

    for (let j = 0; j < numberOfProperties; j++) {
      if (i === 0) {
        if (j === 0) {
          data.headers.push({ key: `firstName${j}`, title: `firstName` })
          data.headers.push({ key: `lastName${j}`, title: `lastName` })
          data.headers.push({ key: `company${j}`, title: `company` })
          data.headers.push({ key: `phone${j}`, title: `phone` })
        }
        data.headers.push({ key: `property_${j}`, title: `property_${j}` })
      }
      element[`property_${j}`] = faker.lorem.word()
    }
    element['id'] = simpleFaker.string.uuid()
    element.firstName = faker.person.firstName()
    element.lastName = faker.person.lastName()
    element.company = faker.company.name()
    element.phone = faker.phone.number()
    data.users.push(element)
  }

  return data
}

export type DataType = {
  headers: {
    key: string
    title: string
  }[]
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
