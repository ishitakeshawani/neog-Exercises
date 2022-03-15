// Take an array and calculate the sum of even and odd numbers using reduce.

const numList = [1, 3, 55, 22, 44]

function oddAndEvenSumReducer(accumulator, value) {
  if(value %2 === 0){
     return {...accumulator,even: accumulator.even + value};
  }
  return {...accumulator, odd: accumulator.odd + value};
}

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer,{odd:0,even:0})
console.log(oddAndEvenSum);