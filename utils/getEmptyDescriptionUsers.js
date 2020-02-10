const noDescription = (jsonUserData, entryArray) => {
    let noDesc = [];
    for(let i=0;i<entryArray.length;i++){
      if( checkingDescription( getDescription(jsonUserData,entryArray[i][0]) ) ) {
        noDesc.push([entryArray[i][0],entryArray[i][1]]);
      }
    }
    return noDesc;
  }
  
  const getDescription = (jsonUserData,id) => {
    let desc = [];
    for(let i=0;i<jsonUserData.length;i++){
        if(jsonUserData[i].user==id){
          desc.push(jsonUserData[i].description);
        }
    }
    return desc;
  }
  
  const checkingDescription = (desc) => {
    for(let i=0; i<desc.length; i++){
      if(desc[i].length < 5){
        return true;
      }
    }
    return false;
  }
  
  module.exports=noDescription;
  