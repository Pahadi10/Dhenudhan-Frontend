import PropTypes from 'prop-types'
import { FormProvider, useForm } from 'react-hook-form'

import { FORM_MODES } from './form.constants'

const Form = ({ children, onSubmit, defaultValues, mode }) => {
  const formMethods = useForm({
    mode,
    defaultValues,
  })

  const handleSubmit = data => {
    onSubmit(data)
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
  mode: PropTypes.oneOf(Object.values(FORM_MODES)),
}

Form.defaultProps = {
  children: null,
  mode: FORM_MODES.onChange,
  defaultValues: {},
}
