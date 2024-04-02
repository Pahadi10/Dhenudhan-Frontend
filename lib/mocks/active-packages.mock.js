import { faker } from '@faker-js/faker'

import { ALERT_TYPES } from '_components/shared/alerts/alert.constant'

import { CLIENT_MOCK } from './client.mock'

export const ACTIVE_PACKAGES_MOCK = {
  packageDefinition: {
    name: faker.name.jobTitle(),
    type: faker.helpers.arrayElement(Object.values(ALERT_TYPES.PACKAGE.types)),
  },
  lastUsedOn: faker.date.future().toISOString(),
  creditsConsumed: faker.datatype.number(),
  creditsTotal: faker.datatype.number(),
  site: {
    name: faker.name.firstName(),
  },
  client: {
    v1Id: CLIENT_MOCK.v1Id,
  },
}
