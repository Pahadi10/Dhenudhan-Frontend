export const useStorage = (key, storageType) => {
  if (key && storageType) {
    if (Array.isArray(key)) {
      let data = []
      for (let i = 0; i <= key.length - 1; i++) {
        data.push(JSON.parse(storageType.getItem(key[i])))
      }
      return data
    } else {
      return JSON.parse(storageType.getItem(key))
    }
  } else {
    new Error('key and storagetype are required')
  }
}
