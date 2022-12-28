function StringChallenge(str) { 

    const vowels = /a|e|i|o|u/g;
    let num = 0
    for (i=0; i<str.length; i++){
      if (vowels.test(str[i])){
        num +=1;
      }
    }
    
    return num; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));

//1. For input "yoop" the output was incorrect. The correct output is 2

//2. For input "aaaeeebziiiooouu" the output was incorrect. The correct output is 14

//3. For input "quaaaaiizick" the output was incorrect. The correct output is 8