const noEntry = (jsonUserData, jsonUserDetails, userArray,entryArray) => {
    let noEntry = [];
    for(let i=0;i < jsonUserDetails.length ;i++){
        userArray.push([jsonUserDetails[i].id,jsonUserDetails[i].username]);
        if(!checkingPresence(jsonUserData,jsonUserDetails[i].id)){
            noEntry.push([jsonUserDetails[i].id,jsonUserDetails[i].username]);
            continue;
        }
        entryArray.push([jsonUserDetails[i].id,jsonUserDetails[i].username]);
    }
    return noEntry;
}

const checkingPresence = (jsonUserData, id) => {
    for(let i=0;i < jsonUserData.length ;i++){
      if(jsonUserData[i].user==id){
          return true;
      }
    }
    return false;
}

module.exports = noEntry;
