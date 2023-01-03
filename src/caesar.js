// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // input = text to be encoded or decoded
    // shift = # it is shifted by, + means right & - means left
    // ex. (def, 1) -> efg
    
    let output = ''

    if (shift === null || shift === 0 || shift < -25 || shift > 25){return false}

    //capital letters can be ignored so lets use toLowerCase
    input = input.toLowerCase()

    if (encode === false){
      shift = shift*-1
    }


    for(let i = 0; i<input.length; i++){
      let code = input[i].charCodeAt() + shift
      
      if (code > 122){code -= 26}
      else if (code < 97){code += 26}

      //exceptions ex. space, exclam, etc
      if (input[i].charCodeAt() < 97 || input[i].charCodeAt() > 122){output += input[i]}
      else{
        output += String.fromCharCode(code)}
    }



    return output
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
