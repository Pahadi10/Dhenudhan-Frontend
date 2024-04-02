import * as React from 'react'

import { DialogProvider } from '_components/shared/dialog/dialog.provider'
import { useDialog } from '_components/shared/dialog/dialog.hooks'
import Button from '_components/shared/button/button.component'

import ModalUploadPhotoComponent from './modal-upload-photo.component'

const Story = {
  title: 'Components',
  component: ModalUploadPhotoComponent,
  decorators: [
    Story => (
      <DialogProvider>
        <Story />
      </DialogProvider>
    ),
  ],
}

const Template = args => {
  const { pushDialog } = useDialog()

  return (
    <Button onClick={() => pushDialog(ModalUploadPhotoComponent, { ...args })}>Open dialog</Button>
  )
}

export const ModalUploadPhoto = Template.bind({})

ModalUploadPhoto.args = {}

export default Story
