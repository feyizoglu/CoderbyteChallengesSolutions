// 9
function StringChallenge(str) { 
    const alphabet = /[a-z]/;
    const numbers = /[1-9]/;
    let str1 = str.split(" ")[0];
    let str2 = str.split(" ")[1];
    let arr = [];
  
    for (let i=0; i<=str2.length; i++){
      if (alphabet.test(str2[i])){
        if (str2[i]!==str2[i+1]){
          arr.push("+");
        }
        else {
          if(str2[i+1]!==str2[i+2]){
          arr.push("*{2}");
          i+=1
          }
          else if (str2[i+2]!==str2[i+3]){
            arr.push("*");
            i+=2;
          }
          else{
            for(let j=3; j<10;j++){
             if (str2[i+j]!==str2[i+j+1]){
              arr.push(`*{${j+2}}`);
              i+=j;        
              }
             break;  
          }
          }
        }
        }else if(numbers.test(str2[i])){
          arr.push("$")
      }
    }
  
    str2 = arr.join("");
    if (str1===str2){
      return true;
    }else{
      return false;
    }
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));

  // 1. For input "*{1}*{1} rt" the output was incorrect. The correct output is true