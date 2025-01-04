
const findingSafeReports = (levels) => {
  let totalSafe = 0
  levels.forEach(level => {
    // looping over the the current level and then removing one number to check whether the level is safe without it. 
      for (let i = 0; i < level.length; i++) {
        let tempArr = [...level];
        // Remove the element at the current index
        tempArr.splice(i, 1);
        if(checkReport(tempArr) == "safe"){
          totalSafe += 1
          break
        }
      }
  });
  return totalSafe
};

const checkReport = (level) =>{
  let order = ""
  let previousOrder = ""
  for(let i = 0;  i < level.length-1; i++){
    order = level[i] < level[i+1] ? "asc" : "des";
    if(previousOrder == ""){previousOrder = order}
    if(order != previousOrder){
      return "unsafe"
    }                                     // checking if asc or des
    let diff = findDifference(level[i],level[i+1])
    if(diff < 1 || diff > 3){
      return "unsafe"
    }                                    // check difference between two whole numbers
  }
  return "safe"
}

const findDifference = (a,b) => {return Math.abs(a-b);}

module.exports = {findingSafeReports}