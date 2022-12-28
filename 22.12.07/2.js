// 9
function StringChallenge(str) { 
    while (str.includes("<div>")){
      if (str.includes("</div>")){
        str = str.replace("<div>", '');
        str = str.replace("</div>", '');
      }
      else{
        return "div"
      }
    }
    while (str.includes("<b>")){
      if (str.includes("</b>")){
        str = str.replace("<b>", '');
        str = str.replace("</b>", '');
      }
      else{
        return "b"
      }
    }
    while (str.includes("<p>")){
      if (str.includes("</p>")){
        str = str.replace("<p>", '');
        str = str.replace("</p>", '');
      }
      else{
        return "p"
      }
    }
    while (str.includes("<i>")){
      if (str.includes("</i>")){
        str = str.replace("<i>", '');
        str = str.replace("</i>", '');
      }
      else{
        return "i"
      }
    }
    while (str.includes("<em>")){
      if (str.includes("</em>")){
        str = str.replace("<em>", '');
        str = str.replace("</em>", '');
      }
      else{
        return "em"
      }
    }
    return true;
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));

//   1. For input "<p><p><em></em><p></p><i></p>" the output was incorrect. The correct output is i