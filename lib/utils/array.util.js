export const updateArrayItem = (array, index, newItem) =>
  array.map((item, itemIndex) => (itemIndex === index ? newItem : item))

export const isLastElement = (array, index) => array.length - 1 !== index
