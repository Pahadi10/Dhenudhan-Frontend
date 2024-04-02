import i18n from '_i18n/index'

export const minifyString = string => string.toString().replace(/\s+/g, ' ').trim()

export const getCurrencySymbol = currency => {
  const [{ value: currencySymbol }] = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).formatToParts()
  return currencySymbol
}

export const isEqual = (...objects) =>
  objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]))

export const convertLongTextToEllipsis = (text, maximumTextLength) => {
  if (text.length > maximumTextLength) {
    return `${text.slice(0, maximumTextLength + 1)}...`
  } else {
    return text
  }
}

export const getNameInitials = name => {
  const [firstName, lastName] = name.split(' ')
  return `${firstName[0]}${lastName[0]}`
}

export const formatCardNumber = last4Digits => {
  if (!last4Digits) return ''
  if (last4Digits.length < 4) return last4Digits
  let formattedDigits = last4Digits
  if (last4Digits.length > 4) {
    formattedDigits = last4Digits.slice(-4)
  }
  const cardNumber = `\u{2022}\u{2022}\u{2022}\u{2022} ${formattedDigits}`
  return cardNumber
}

export const formatCardExpirationDate = expirationDate => {
  const month = expirationDate.getMonth() + 1
  const year = expirationDate.getFullYear()
  return `${month}/${year}`
}

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export const regexToAllowedChars = regex => {
  const allowedChars = []
  const charCodeMap = new Map()
  const maxCharCode = 65535 // Maximum character code to check

  // Loop through all characters up to maxCharCode and check if they match the regex
  for (let i = 0; i <= maxCharCode; i++) {
    const char = String.fromCharCode(i)
    if (regex.test(char) && /[^a-zA-Z0-9]/.test(char)) {
      if (char === ' ') {
        allowedChars.push('whitespace character')
      } else {
        allowedChars.push(char)
      }
      charCodeMap.set(i, char)
    }
  }

  const andWord = i18n.t('common:and')

  // Join allowed characters with commas and replace last comma with "and"
  if (allowedChars.length > 1) {
    const newAllowedChars = [...allowedChars]
    const lastChar = newAllowedChars.pop()
    const joinedChars = newAllowedChars.join(' ')
    return {
      string: `${joinedChars} ${andWord} ${lastChar}`,
      length: allowedChars.length,
      allowedChars,
    }
  } else {
    return {
      string: allowedChars.join(', '),
      length: allowedChars.length,
    }
  }
}

export const encodeIdWithDots = (id, startChars, endChars) =>
  id.substr(0, startChars) +
  (id.length > 25 ? '.....' : Array(id.length - startChars - endChars).join('.')) +
  id.substr(id.length - endChars)
