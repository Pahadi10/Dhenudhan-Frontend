import { faker } from '@faker-js/faker'
import _ from 'lodash'

import PlusIcon from '../../../assets/svgs/plus.svg'
import SettingIcon from '../../../assets/svgs/setting.svg'

import { renderCommonHeader } from './table.util'

export const PROPS_MOCK = {
  title: faker.company.name(),
  columns: [
    {
      Header: faker.name.firstName(),
      accessor: 'col1',
      hasFilter: true,
      customHeaderRender: value => {
        return renderCommonHeader(value)
      },
    },
    {
      Header: faker.name.firstName(),
      accessor: 'col2',
    },
    {
      Header: '',
      accessor: 'action',
    },
  ],
  data: [
    {
      col1: faker.name.fullName(),
      col2: faker.animal.dog(),
    },
    {
      col1: faker.name.fullName(),
      col2: faker.animal.dog(),
    },
    {
      col1: faker.name.fullName(),
      col2: faker.animal.dog(),
    },
  ],
  primaryAction: {
    label: _.capitalize(faker.word.verb()),
    icon: PlusIcon,
    action: () => null,
  },
  secondaryAction: {
    label: _.capitalize(faker.word.verb()),
    icon: SettingIcon,
    action: () => null,
  },
  searchPlaceholder: 'Search by team member name, email or phone',
  hasGlobalFilter: true,
  pagination: {
    pageSizeOptions: [
      {
        label: '5',
        value: 5,
      },
      {
        label: '10',
        value: 10,
      },
      {
        label: '25',
        value: 25,
      },
    ],
  },
}
