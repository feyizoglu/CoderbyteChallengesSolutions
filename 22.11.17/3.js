function StringChallenge(str) { 

    const [I,V,X,L,C,D,M] = [1,5,10,50,100,500,1000];
    let arr = str.split("");
    let total = 0;
    for (let i=0; i<arr.length; i++){
      if (arr[i] === "I"){
        arr[i] = 1;
      }else if (arr[i] === "V"){
        arr[i] = 5;
      }else if (arr[i] === "X"){
        arr[i] = 10;
      }else if (arr[i] === "L"){
        arr[i] = 50;
      }else if (arr[i] === "C"){
        arr[i] = 100;
      }else if (arr[i] === "D"){
        arr[i] = 500;
      }else if (arr[i] === "M"){
        arr[i] = 1000;
      }else{
        return false;
      }
    }
    for (index of arr){
      total+=index;
    }
    let arr2 =[];
    while (total >=1000){
      arr2.push("M");
      total = total-1000;
    }
    while (total >=500){
      arr2.push("D");
      total = total-500;
    }
    while (total >=100){
      arr2.push("C");
      total = total-100;
    }
    while (total >=50){
      arr2.push("L");
      total = total-50;
    }
    while (total >=10){
      arr2.push("X");
      total = total-10;
    }
    while (total >=5){
      arr2.push("V");
      total = total-5;
    }
    while (total >=1){
      arr2.push("I");
      total = total-1;
    }
    
    return arr2.join(''); 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));