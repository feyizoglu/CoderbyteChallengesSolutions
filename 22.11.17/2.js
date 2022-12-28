function MathChallenge(num) { 
    if (num<2) return false;
    let arr = [];
    for (let i=2; i<num;i++){
      if (num%i ===0){
        arr.push(i);
      }
    }
    if (arr.length ===0){
      return true;
    }else{
      return false;
    }
    
  
  
  
  }
     
  // keep this function call here 
  console.log(MathChallenge(readline()));