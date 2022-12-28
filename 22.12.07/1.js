function ArrayChallenge(strArr) { 
  
    strArr.sort((a,b) => b.length-a.length)
      
    return strArr[2];
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));