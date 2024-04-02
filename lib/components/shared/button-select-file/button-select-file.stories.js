import React from 'react'

import ButtonSelectFileComponent from './button-select-file.component'

const Story = {
  title: 'Components/ButtonSelectFile',
  component: ButtonSelectFileComponent,
}

const TemplateInput = args => <ButtonSelectFileComponent {...args} />

export const ButtonSelectFile = TemplateInput.bind({})
ButtonSelectFile.args = {
  multiple: false,
  type: 'file',
  accept: 'image/*',
  name: 'button-input',
  buttonProps: {
    label: 'Label',
  },
}
export default Story
