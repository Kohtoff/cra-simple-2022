 export const useTotalPrice =  (array=[]) => {
  return array.reduce((prev, next) => {
    return Number(prev) + Number(next.price) * Number(next.amount)}, 0)
};
