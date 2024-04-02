import { SvgIcon } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import SearchIcon from '_assets/svgs/search-small.svg'
import ClearSearchIcon from '_assets/svgs/times-circle.svg'
import Button from '_components/shared/button/button.component'
import { BUTTON_VARIANTS } from '_components/shared/button/button.constants'
import TextField from '_components/shared/text-field/text-field.component'
import { useDebounce } from '_hooks/useDebounce'

import { SEARCH_DEBOUNCE, SEARCH_FIELD_NAME, uuid } from './search.constants'
import { styles } from './search.styles'

const Search = ({ initialValue, searchCallback, placeholder, debounceValue, sx }) => {
  const formMethods = useForm({
    defaultValues: { search: initialValue },
    mode: 'all',
  })
  const [isFocused, setIsFocused] = useState(false)
  const { watch, setValue } = formMethods
  const searchValue = watch(SEARCH_FIELD_NAME)
  const hasClearButton = searchValue?.length > 0
  const debouncedSearchValue = useDebounce(searchValue, debounceValue)
  const handleClearSearchField = useCallback(() => {
    setValue(SEARCH_FIELD_NAME, '')
  }, [setValue])

  useEffect(() => {
    if (!initialValue) {
      handleClearSearchField()
    }
  }, [initialValue, handleClearSearchField])

  useEffect(() => {
    searchCallback(searchValue ? debouncedSearchValue : searchValue)
  }, [debouncedSearchValue, searchValue, searchCallback])

  return (
    <FormProvider {...formMethods}>
      <form style={styles.formTag}>
        <TextField
          // sx={[styles.search, ...(Array.isArray(sx) ? sx : [sx])]}
          name={SEARCH_FIELD_NAME}
          onKeyPress={e => {
            e.key === 'Enter' && e.preventDefault()
          }}
          placeholder={placeholder}
          InputProps={{
            onFocus: () => setIsFocused(true),
            // style: styles.search,
            startAdornment: <SvgIcon component={SearchIcon} sx={styles.searchIcon} />,
            endAdornment: (
              <>
                {hasClearButton && isFocused && (
                  <Button
                    variant={BUTTON_VARIANTS.ICON}
                    icon={ClearSearchIcon}
                    onClick={handleClearSearchField}
                    // sx={styles.clearSearchIcon}
                  />
                )}
              </>
            ),
          }}
          uid={uuid ? `${uuid}-${SEARCH_FIELD_NAME}` : ''}
        />
      </form>
    </FormProvider>
  )
}

Search.propTypes = {
  initialValue: PropTypes.string,
  searchCallback: PropTypes.func,
  placeholder: PropTypes.string,
  debounceValue: PropTypes.number,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
}

Search.defaultProps = {
  initialValue: '',
  searchCallback: () => {},
  placeholder: '',
  debounceValue: SEARCH_DEBOUNCE,
  sx: {},
}

export default React.memo(Search)
