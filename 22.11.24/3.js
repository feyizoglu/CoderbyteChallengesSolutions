function ArrayChallenge(strArr) { 
    let zero = [];
    let zeroNum = 0;
    for (let i =1; i<strArr.length;i++){
      if (strArr[i] == 0){
        zero.push(i);
      }
    }
    
    if (zero.length == 1){
      zeroNum = zero[0];
      if (strArr[0] === "I"){
        return Math.min(strArr[zeroNum-1],strArr[zeroNum+1],4)
      }
      else if(strArr[0] === "L"){
        if (strArr[zeroNum-1] > 2){
          return 0;
        }
        else if (strArr[zeroNum-1] == 2){
          return Math.min(strArr[zeroNum+1],3);
        }
        return Math.min(strArr[zeroNum-1],strArr[zeroNum+1],3)
      }
      else if(strArr[0] === "S" ||  strArr[0] === "T"){
        if (strArr[zeroNum-1] > 1){
          return 0;
        }
        else if (strArr[zeroNum-1] == 1){
          return Math.min(strArr[zeroNum+1],2);
        }
        return Math.min(strArr[zeroNum-1],strArr[zeroNum+1],2)
      }
      else if(strArr[0] === "Z"){
        if (strArr[zeroNum+1] > 1){
          return 0;
        }
        else if (strArr[zeroNum+1] == 1){
          return Math.min(strArr[zeroNum+1],2);
        }
        return Math.min(strArr[zeroNum-1],strArr[zeroNum+1],2)
      }
      else{
        return 0;
      }
    }
  
  
    if (zero.length>2){
      return 0;
    }
  
    if (zero.length==2){
      if (!(zero[1]-zero[0] == 1)){
        return 0;
      }
      else if (strArr[0] === "J"){
        return 1;
      }
      else if (strArr[0] === "O"){
        return Math.min(strArr[zero[0]-1],strArr[zero[1]+1],2)
      }
    }
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));


//   1. For input ["T","4","3","2","3","5","2","0","1","2","4","3","4"] the output was incorrect. The correct output is 2

// 2. For input ["S","4","3","2","3","5","2","0","1","2","4","3","4"] the output was incorrect. The correct output is 1 --- ANLAMADIM.

// 3. For input ["T","4","3","2","3","2","1","0","1","2","4","3","4"] the output was incorrect. The correct output is 2

// 4. For input ["I","4","3","3","4","2","0","0","1","3","4","3","4"] the output was incorrect. The correct output is 1 *****ANLAMADIM

// 5. For input ["Z","4","3","3","4","3","3","0","2","3","4","5","4"] the output was incorrect. The correct output is 2  ****ANLAMADIM