import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material'
import MuiSelect from '@mui/material/Select'
import { PropTypes } from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { commonStyles } from '_styles/common.styles'
import SelectAllIcon from '_assets/svgs/check-small.svg'
import ClearAllIcon from '_assets/svgs/times.svg'
import SearchIcon from '_assets/svgs/search-small.svg'
import ClearSearchIcon from '_assets/svgs/times-circle.svg'

import AvatarComponent from '../avatar/avatar.component'
import { AVATAR_SIZE, AVATAR_TYPES } from '../avatar/avatar.constants'
import Checkbox from '../checkbox/checkbox.component'
import { CHECKBOX_TYPES } from '../checkbox/checkbox.constants'
import Button from '../button/button.component'
import { BUTTON_VARIANTS } from '../button/button.constants'
import TextField from '../text-field/text-field.component'

import { DROPDOWN_TYPE, DROPDWON_SEARCH_FIELD_NAME } from './dropdown.constants'
import { styles, menuItemStyles } from './dropdown.styles'

const Dropdown = ({
  name,
  label,
  type,
  disabled,
  options,
  multiple,
  required,
  error,
  placeholder,
  optionsCategory,
  shouldSearch,
}) => {
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [searchQuery, setSearchQuery] = useState('')
  const { control, setValue, watch } = useFormContext()
  const { t } = useTranslation('common')
  const buttonRef = useRef(null)
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({
    control,
    defaultValue: multiple ? [] : '',
    rules: { required },
    name,
  })
  const inputValue = multiple && !Array.isArray(value) ? [value] : value

  useEffect(() => {
    const resultOptions = options.filter(
      option =>
        option.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
        option.label.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setFilteredOptions(resultOptions)
  }, [options, searchQuery])

  const renderList = useCallback(
    item => {
      switch (type) {
        case DROPDOWN_TYPE.CHECKLIST:
          return (
            <Box sx={styles.checklistContainer}>
              <Checkbox
                name={`dropdown-item-checkbox-${item.value}`}
                type={CHECKBOX_TYPES.SIMPLE}
                value={value.includes(item.value)}
                sx={styles.menuItemCheckbox}
                shouldUnregister
                formGroupProps={{ sx: styles.checkboxFormGroup }}
              />
              <ListItemText
                primaryTypographyProps={{ sx: styles.checkboxLabel }}
                primary={item.label}
              />
            </Box>
          )

        case DROPDOWN_TYPE.ICON_LIST:
          if (item.icon) {
            return (
              <>
                <ListItemIcon sx={styles.menuItemIcon}>
                  <SvgIcon component={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.label} sx={styles.menuItemText} />
              </>
            )
          }
          return <ListItemText primary={item.label} sx={styles.menuItemText} />

        case DROPDOWN_TYPE.AVATAR:
          return (
            <Box sx={commonStyles.flexRow}>
              <Box sx={styles.menuItemAvatar}>
                <AvatarComponent
                  item={{
                    src: item.avatar,
                    alt: item.label,
                  }}
                  avatarType={AVATAR_TYPES.SINGLE_AVATAR}
                  size={AVATAR_SIZE.SMALL}
                />
              </Box>

              <ListItemText primary={item.label} sx={styles.menuItemText} />
            </Box>
          )
        default:
          return <ListItemText primary={item.label} sx={styles.menuItemText} />
      }
    },
    [type, value],
  )

  const queriedValue = watch(`${name}${DROPDWON_SEARCH_FIELD_NAME}`)

  const handleDelete = removeValue => {
    onChange(value.filter(items => items !== removeValue))
  }

  const handleSelectAll = () => {
    const allValues = filteredOptions.map(option => option.value)
    onChange(allValues)
  }

  const handleClearAll = () => {
    onChange([])
  }

  const setSearchValueHandler = useCallback(
    e => {
      setValue(`${name}${DROPDWON_SEARCH_FIELD_NAME}`, e.target.value)
      setSearchQuery(e.target.value)
    },
    [name, setValue],
  )

  const clearSearchValueHandler = useCallback(() => {
    setValue(`${name}${DROPDWON_SEARCH_FIELD_NAME}`, '')
    setSearchQuery('')
  }, [name, setValue])

  const handleClose = useCallback(() => {
    setValue(`${name}${DROPDWON_SEARCH_FIELD_NAME}`, '')
    setSearchQuery('')
  }, [name, setValue])

  const selectedValue = selected => {
    const selectedValues = Array.isArray(selected) ? selected : [selected]
    const optionsSelected = options.filter(option => selectedValues.includes(option.value))
    const [singleValue] = optionsSelected

    if (type === DROPDOWN_TYPE.AVATAR && !multiple) {
      return (
        <Box sx={commonStyles.flexRow}>
          <AvatarComponent
            item={{
              src: singleValue.avatar,
              alt: singleValue.label,
            }}
            avatarType={AVATAR_TYPES.SINGLE_AVATAR}
            size={AVATAR_SIZE.SMALL}
          />
          <Typography typography="large" color="gray.80" ml={1.5}>
            {singleValue.label}
          </Typography>
        </Box>
      )
    }

    if (type === DROPDOWN_TYPE.ICON_LIST && !multiple) {
      if (singleValue.icon) {
        return (
          <Box sx={commonStyles.flexRow}>
            <SvgIcon component={singleValue.icon} sx={styles.icon} />
            <Typography typography="large" color="gray.64" ml={1.5}>
              {singleValue.label}
            </Typography>
          </Box>
        )
      }
      return (
        <Typography typography="large" color="gray.80" ml={1.5}>
          {singleValue.label}
        </Typography>
      )
    }

    return multiple ? (
      <Stack direction="row" sx={styles.selectedItemStack}>
        {optionsSelected?.map(item => (
          <Chip
            key={item.value}
            label={item.label}
            sx={styles.chipRoot}
            onDelete={() => handleDelete(item.value)}
            onMouseDown={event => {
              event.stopPropagation()
            }}
          />
        ))}
      </Stack>
    ) : (
      singleValue?.label
    )
  }

  const handleChange = useCallback(
    e => {
      const selectedOption = options.find(option => option.value === e.target.value)
      if (selectedOption?.onClick) {
        return selectedOption.onClick()
      }

      onChange(e.target.value)

      if (searchQuery.length > 0 && !!queriedValue) {
        setFilteredOptions(filteredOptions)
      } else {
        setFilteredOptions(options)
      }
    },
    [filteredOptions, onChange, options, queriedValue, searchQuery.length],
  )

  const bottomSheet = (
    <Paper sx={styles.bottomSheetPaperRoot}>
      <Box sx={styles.bottomSheetBtnContainer}>
        <Button
          ref={buttonRef}
          label={optionsCategory}
          type="button"
          variant={BUTTON_VARIANTS.TEXT}
          startIcon={SelectAllIcon}
          onClick={handleSelectAll}
        />
        <Button
          label={t('clearAll')}
          type="button"
          variant={BUTTON_VARIANTS.TEXT}
          startIcon={ClearAllIcon}
          onClick={handleClearAll}
        />
      </Box>
    </Paper>
  )

  const searchBar = (
    <Paper sx={styles.searchBarPaperRoot}>
      <TextField
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={true}
        name={`${name}${DROPDWON_SEARCH_FIELD_NAME}`}
        placeholder={placeholder}
        sx={styles.searchBar}
        onChange={setSearchValueHandler}
        onKeyDown={e => {
          if (e.key !== 'Escape') {
            e.stopPropagation()
          }
        }}
        InputProps={{
          startAdornment: <SvgIcon sx={styles.searchIcon} component={SearchIcon} size="small" />,
          endAdornment:
            searchQuery.length > 0 ? (
              <SvgIcon
                sx={styles.clearSearchIcon}
                component={ClearSearchIcon}
                onClick={clearSearchValueHandler}
              />
            ) : (
              ''
            ),
        }}
      />
    </Paper>
  )

  return (
    <Box sx={styles.selectRoot}>
      <FormControl required={required} error={error} sx={styles.formControl}>
        {label ? (
          <InputLabel id={name} sx={styles.label}>
            {label}
          </InputLabel>
        ) : null}
        <MuiSelect
          MenuProps={{ autoFocus: false }}
          ref={ref}
          id={name}
          label={label}
          sx={styles.select}
          value={inputValue}
          onChange={handleChange}
          renderValue={selectedValue}
          disabled={disabled}
          multiple={multiple}
          variant="outlined"
          onBlur={onBlur}
          onClose={handleClose}
        >
          {shouldSearch ? searchBar : null}
          {filteredOptions?.map(item => (
            <MenuItem
              key={item.value}
              value={item.value}
              sx={[
                styles.menuItems,
                item.hasDivider && styles.hasDivider,
                type === DROPDOWN_TYPE.CHECKLIST && menuItemStyles(),
              ]}
            >
              <Box sx={styles.optionContainer}>{renderList(item)}</Box>
            </MenuItem>
          ))}
          {filteredOptions.length === 0 && (
            <MenuItem sx={styles.noResultFound}>
              <Typography typography="header3" color="gray.56">
                {/*
                 As there is no dedicated screen for this one, I am letting this text as it is.
                 Later on, will be fixed.
                */}
                No result found!!
              </Typography>
            </MenuItem>
          )}
          {multiple && bottomSheet}
        </MuiSelect>
      </FormControl>
    </Box>
  )
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(DROPDOWN_TYPE)),
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  required: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  optionsCategory: PropTypes.string,
  shouldSearch: PropTypes.bool,
}

Dropdown.defaultProps = {
  name: '',
  label: '',
  type: DROPDOWN_TYPE.DEFAULT,
  disabled: false,
  multiple: false,
  required: false,
  error: false,
  optionsCategory: 'Select all options',
  shouldSearch: false,
}

export default React.memo(Dropdown)
