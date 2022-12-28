function ArrayChallenge(strArr) { 
    let newStr = [];
    for (let i=0; i<strArr[0].length; i++){
      if (strArr[0][i] === strArr[1][i] && strArr[0][i] == 1){
        newStr[i] = 1;
      }
      else {
        newStr[i] = 0;
      }
    }
     
    return newStr.join(''); 
  
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));