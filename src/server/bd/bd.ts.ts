import { faker, simpleFaker } from '@faker-js/faker'

export const getDataFromBD = () => {
  const numberOfElements = 2 // Количество элементов
  const numberOfProperties = 20 // Количество свойств

  const data: dataType = { headers: [], users: [] }

  for (let i = 0; i < numberOfElements; i++) {
    const element = {} as UserType

    for (let j = 0; j < numberOfProperties; j++) {
      if (i === 0) {
        if (j === 0) {
          data.headers.push({ key: `fullName${j}`, title: `fullName` })
          data.headers.push({ key: `email${j}`, title: `email` })
        }
        data.headers.push({ key: `property_${j}`, title: `property_${j}` })
      }
      element[`property_${j}`] = faker.lorem.word()
    }
    element['id'] = simpleFaker.string.uuid()
    element.fullName = faker.person.fullName()
    element.email = faker.internet.email()
    data.users.push(element)
  }

  return data
}

export type dataType = {
  headers: {
    key: string
    title: string
  }[]
  users: UserType[]
}

export type UserType = {
  [key: string]: string
  email: string
  fullName: string
  id: string
}
