export const setToStorage = (key, data, storageType) => {
  if (key && storageType) {
    if (Array.isArray(key) && Array.isArray(data)) {
      for (let i = 0; i < key.length; i++) {
        storageType.setItem(key[i], JSON.stringify(data[i]))
      }
    } else {
      storageType.setItem(key, JSON.stringify(data))
    }
  } else {
    new Error('key and storagetype are required')
  }
}

export const removeFromStorage = (key, storageType) => {
  if (key && storageType) {
    if (Array.isArray(key)) {
      for (let i = 0; i < key.length; i++) {
        storageType.removeItem(key[i])
      }
    } else {
      storageType.removeItem(key)
    }
  } else {
    new Error('key and storagetype are required')
  }
}

export const clearStorage = storageType =>
  storageType ? storageType.clear() : new Error('storage type is required')
