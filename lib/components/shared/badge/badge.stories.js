import { faker } from '@faker-js/faker'
import React from 'react'

import Avatar from '_components/shared/avatar/avatar.component'

import { AVATAR_SIZE } from '../avatar/avatar.constants'

import BadgeComponent from './badge.component'
import { BADGE_ANCHOR_ORIGIN } from './badge.constants'

const Story = {
  title: 'Components',
  component: BadgeComponent,
  argTypes: {
    anchorOrigin: { mapping: BADGE_ANCHOR_ORIGIN, options: Object.values(BADGE_ANCHOR_ORIGIN) },
  },
}
const Template = args => <BadgeComponent {...args} />
export const Badge = Template.bind({})
Badge.args = {
  badgeContent: <Avatar item={{ src: faker.image.avatar() }} />,
  children: <Avatar item={{ src: faker.image.avatar() }} size={AVATAR_SIZE.EXTRA_LARGE} />,
}

export default Story
