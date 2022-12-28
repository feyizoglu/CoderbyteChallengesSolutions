function ArrayChallenge(strArr) { 
    const seqChar = strArr[0];
    const longStr = strArr[1].split(",");
    for (let i=1; i<seqChar.length; i++){
      let firstWord = seqChar.slice(0,i);
      let secondWord = seqChar.slice(i,);
      if (longStr.includes(firstWord) && longStr.includes(secondWord)){
        return `${firstWord},${secondWord}`;
      }
    }
    return seqChar.slice(0,2); 
//   not possible kısmını yazmamışım. İnanılmaz.
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));