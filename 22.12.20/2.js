function ArrayChallenge(arr) { 

    const arr2 = new Set();
    for (let i=0; i<arr.length; i++){
      arr2.add(arr[i])
    } 
    
    return arr.length-arr2.size
    
  
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));