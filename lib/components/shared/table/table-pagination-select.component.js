import { MenuItem, Select as MuiSelect } from '@mui/material'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'

import AngleDownIcon from '_assets/svgs/angle-down-very-small.svg'

import { styles } from './table.styles'

const TablePaginationSelect = ({ name, options }) => {
  const { control, register } = useFormContext()
  const {
    field: { value, onChange },
  } = useController({
    register,
    control,
    name,
  })

  return (
    <MuiSelect
      onChange={onChange}
      value={value}
      IconComponent={AngleDownIcon}
      sx={styles.paginationSelect.root}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  )
}

TablePaginationSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default TablePaginationSelect
