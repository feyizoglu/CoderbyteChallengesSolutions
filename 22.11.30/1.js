function StringChallenge(str) { 

    const arr = str.split(" ");
    let unique = new Set()
    for (let num of arr){
      unique.clear();
      let arr2 = num.split("");
        for (let i=0; i<arr2.length; i++){
          if (parseInt(arr2[i]) && parseInt(arr2[i+1]) && parseInt(arr2[i+2])){
           return false;
        }else{
          unique.add(parseInt(arr2[i]));
        }
      }
      unique.delete(NaN);
      if (unique.size != 3){
        return false;
      }
    }
     
  return true;
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));