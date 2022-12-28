function MathChallenge(num1,num2) { 

    let commonFactor = 0;
    let minNum = Math.min(num1,num2);
    for (let i = 1; i<=minNum; i++){
      if (num1%i ===0 && num2%i ===0){
        commonFactor = i;
      }
    }
  return commonFactor;
  
  
  
  }
     
  // keep this function call here 
  console.log(MathChallenge(readline()));