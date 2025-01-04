const findingSafeReports = (levels) => {
  let totalSafe = 0
  levels.forEach(level => {
    if(checkReport(level) == "safe"){
      totalSafe += 1
    }
  });
  return totalSafe
};

const checkReport = (level) =>{
  let order = ""
  let previousOrder = ""
  let unsafeLocAndCount = []
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