
const findTotalDistance = (numArrayOne,numArrayTwo) =>{
  numArrayOne.sort((a,b) =>{return a-b});
  numArrayTwo.sort((a,b) =>{return a-b});
  let total = 0
  for(let i = 0; i < numArrayOne.length; i++){
    total += findNumDifference(numArrayOne[i], numArrayTwo[i]) 
  }
  return total
};

const findNumDifference = (a,b) =>{
  return a<b ? b-a : a-b 
}

module.exports = {findTotalDistance}