function ArrayChallenge(arr) { 
    let N= arr[0];
    const arr2 = [];
    for (let i = 0; i<arr.length; i++){
      if (N+i < arr.length){
        arr2.push(arr[N+i]);
      }
    }
    for (let j=0; j<N; j++){
        arr2.push(arr[j]);
    }
    
    return arr2.join(''); 
  
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));