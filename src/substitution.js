// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const sub = [];
    const alpha = "abcdefghijklmnopqrstuvwxyz";
 
    let inputSplit = input.split(""); //ignore capitals

    if (alphabet === undefined) {
      return false;
    }
    if (alphabet.length !== 26) {
      return false;
    }

    //do not allow repeats
    var charRepeats = function (str) {
      for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
          return false; // repeats
        }
      }
      return true;
    }
    if (!charRepeats(alphabet)){return false}

    if (encode) {
      for (let i = 0; i < 26; i++) {
        sub[alpha[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 26; i++) {
        sub[alphabet[i]] = alpha[i]; //for decode
      }
    }

    let result = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter === " ") {
          return " ";
        }
        return sub[letter];
      });
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
