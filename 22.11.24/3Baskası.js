function ArrayChallenge(strArr) {
    let stringofStrArr = strArr.join("");
    console.log(stringofStrArr);
    let types = ["I", "J", "L", "O", "S", "T", "Z"];
    let total0 = 0;
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    let total4 = 0;
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] == "0") {
        total0 += 1;
      } else if (strArr[i] == "1") {
        total1++;
      } else if (strArr[i] == "2") {
        total2++;
      } else if (strArr[i] == "3") {
        total3++;
      } else if (strArr[i] == "4") {
        total4++;
      }
    }
  
    for (let i = 0; i < strArr.length; i++) {
      if (types.includes(strArr[i]) && strArr[i] == "I") {
        if (total0 == 4 && stringofStrArr.includes("0000")) {
          return 1;
        } else if (total0 == 1 && total1 >= 1) {
          return 1;
        } else if (total0 == 1 && total2 >= 1 && total1 == 0) {
          return 2;
        } else if (total0 == 1 && total3 >= 1 && total1 == 0 && total2 == 0) {
          return 3;
        } else if (
          total0 == 1 && total4 >= 1 && total1 == 0 && total2 == 0 && total3 == 0
        ) {
          return 4;
        } else if (
          total0 == 1 && total4 == 0 && total1 == 0 && total2 == 0 && total3 == 0
        ) {
          return 4;
        } else {
          return 0;
        }
      } else if (types.includes(strArr[i]) && strArr[i] == "J") {
        if (
          (stringofStrArr.includes("00") && total0 == 2) ||
          (stringofStrArr.includes("01") && total0 == 1) ||
          (stringofStrArr.includes("000") && total0 == 3)
        ) {
          return 1;
        } else if (
          stringofStrArr.includes("02") &&
          total0 == 1 &&
          total2 == 1 &&
          total1 == 0
        ) {
          return 3;
        } else if (
          stringofStrArr.includes("02") &&
          total2 > 1 &&
          total0 == 1 &&
          total1 == 0
        ) {
          return 2;
        } else if (stringofStrArr.includes("02") && total0 == 1 && total1 > 0) {
          return 1;
        } else {
          return 0;
        }
      } else if (types.includes(strArr[i]) && strArr[i] == "L") {
        if (
          (stringofStrArr.includes("00") && total0 == 2) ||
          (stringofStrArr.includes("10") && total1 >= 1 && total0 == 1) ||
          (stringofStrArr.includes("000") && total0 == 3)
        ) {
          return 1;
        } else if (
          stringofStrArr.includes("20") &&
          total0 == 1 &&
          total2 == 1 &&
          total1 == 0
        ) {
          return 3;
        } else if (
          stringofStrArr.includes("20") &&
          total2 > 1 &&
          total0 == 1 &&
          total1 == 0
        ) {
          return 2;
        } else if (stringofStrArr.includes("20") && total0 == 1 && total1 > 0) {
          return 1;
        } else {
          return 0;
        }
      } else if (strArr.includes(strArr[i]) && strArr[i] == "O") {
        if (stringofStrArr.includes("00") && total0 == 2 && total1 == 0) {
          return 2;
        } else if (stringofStrArr.includes("00") && total0 == 2 && total1 >= 1) {
          return 1;
        } else {
          return 0;
        }
      } else if (strArr.includes(strArr[i]) && strArr[i] == "S") {
        if (stringofStrArr.includes("001") && total0 == 2 && total1 >= 1) {
          return 1;
        } else if (stringofStrArr.includes("10") && total0 == 1 && total1 == 1) {
          return 2;
        } else if (stringofStrArr.includes("10") && total0 == 1 && total1 > 1) {
          return 1;
        } else {
          return 0;
        }
      } else if (strArr.includes(strArr[i]) && strArr[i] == "T") {
        if (stringofStrArr.includes("101") && total0 == 1 && total1 == 2) {
          return 2;
        } else if (stringofStrArr.includes("101") && total0 == 1 && total1 >= 1) {
          return 1;
        } else if (stringofStrArr.includes("01") && total0 == 1 && total1 == 1) {
          return 2;
        } else if (stringofStrArr.includes("01") && total0 == 1 && total1 >= 1) {
          return 1;
        } else if (stringofStrArr.includes("10") && total0 == 1 && total1 == 1) {
          return 2;
        } else if (stringofStrArr.includes("10") && total0 == 1 && total1 >= 1) {
          return 1;
        } else {
          return 0;
        }
      } else if (strArr.includes(strArr[i]) && strArr[i] == "Z") {
        if (stringofStrArr.includes("100") && total0 == 2 && total1 >= 1) {
          return 1;
        } else if (stringofStrArr.includes("01") && total0 == 1 && total1 == 1) {
          return 2;
        } else if (stringofStrArr.includes("01") && total0 == 1 && total1 > 1) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }
    
  }
  
  
  console.log(ArrayChallenge(["T","4","3","2","3","2","1","0","1","2","4","3","4"]));