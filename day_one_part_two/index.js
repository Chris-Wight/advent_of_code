const testFunc = (arrayOne,arrayTwo) =>{
  let total = 0
  for(let i = 0; i < arrayOne.length; i++){
    total += arrayOne[i] * arrayTwo.filter(num => num == arrayOne[i]).length;
  }
  return total
}

module.exports = {testFunc}