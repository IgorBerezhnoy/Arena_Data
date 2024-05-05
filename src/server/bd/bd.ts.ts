import { faker, simpleFaker } from '@faker-js/faker'

const numberOfElements = 2 // Количество элементов
const numberOfProperties = 10 // Количество свойств

export const data: UserType[] = []

for (let i = 0; i < numberOfElements; i++) {
  const element = {} as UserType

  for (let j = 0; j < numberOfProperties; j++) {
    element[`property_${j}`] = faker.lorem.word()
  }
  element['id'] = simpleFaker.string.uuid()
  element.fullName = faker.person.fullName()
  element.email = faker.person.fullName()
  data.push(element)
}

type UserType = {
  [key: string]: string
  fullName: string
  id: string
}
