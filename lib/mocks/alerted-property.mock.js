import { faker } from '@faker-js/faker'

export const ALERTED_PROPERTY_MOCK = {
  id: faker.database.mongodbObjectId(),
  value: faker.lorem.sentence(),
  title: faker.word.noun(),
}
