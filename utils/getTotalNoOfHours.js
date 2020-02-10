const hoursWork = (jsonUserData, entryArray) => {
    let hoursWorkArray = [];
    for(let i=0;i < entryArray.length;i++){
      hoursWorkArray.push([entryArray[i][0],entryArray[i][1],hoursCalculation(jsonUserData, entryArray[i][0]).toPrecision(3)]);
    }
    return hoursWorkArray;
  }
  
  const hoursCalculation = (jsonUserData, id) => {
    let hoursWork = 0;
    for (let i = 0; i < jsonUserData.length; i++) {
      if(jsonUserData[i].user == id){
        hoursWork += (jsonUserData[i].duration/3600);
      }
    }
    return hoursWork;
  }
  
  module.exports = hoursWork;
  