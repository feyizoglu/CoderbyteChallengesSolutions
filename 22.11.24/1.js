function StringChallenge(str) { 
    const alpRe = /[a-zA-Z]/;
    str = str.toLowerCase();
    let arr = ""
    for (let i=0; i<str.length; i++){
      if (!alpRe.test(str[i])){
        arr += str[i+1].toUpperCase();
        i++;
      }
      else{
        arr+= str[i];
      }
    }
  return arr;
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));