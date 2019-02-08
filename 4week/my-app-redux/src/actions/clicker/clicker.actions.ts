export const clickerTypes = {
  INCREMENT: 'CLICKER_INCREMENT'
}

export const increment = (amount: number) => {
  return {
    payload: {
      amount
    },
    type: clickerTypes.INCREMENT
  }
}