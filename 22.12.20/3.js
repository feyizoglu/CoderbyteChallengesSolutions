function CombinatoricsChallenge(num) { 

    if (num == 0){
      return 1;
    }
    else if(num<0){
      return 0;
    }
    else {
      return CombinatoricsChallenge(num-2) + CombinatoricsChallenge (num-1);
    }
    
  
  }
     
  // keep this function call here 
  console.log(CombinatoricsChallenge(readline()));