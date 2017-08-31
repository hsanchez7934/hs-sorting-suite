function bubbleSort (numberArray){
  for(let i = 0; i < numberArray.length; i++){

    for(let j = 0; j < numberArray.length; j ++){
      if(numberArray[j] > numberArray[j+1]){
       [ numberArray[j], numberArray[j+1]] = [numberArray[j+1], numberArray[j]]
      }
    }
  }
  return numberArray
}

export default bubbleSort;
