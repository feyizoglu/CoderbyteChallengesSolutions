let str = "aaaaa"
const lowerCaseLetters = /[a-z]/g;
for (let i=0; i<=str.length; i++){
    if (lowerCaseLetters.test(str[i])){
      console.log(i);
    }
}