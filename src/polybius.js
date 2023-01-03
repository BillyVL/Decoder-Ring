// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    // Const polybiusArray = [["a","b","c","d","e"], [f-k], [etc]]]
    const pArray = [['a','b','c','d','e'], ['f', 'g', 'h', '(i/j)', 'k'], ['l', 'm', 'n', 'o', 'p'], ['q', 'r', 's', 't', 'u'], ['v', 'w', 'x', 'y', 'z']]

    let inputSplit = input.split("")
    let result = ''

    //read two numbers(decode)/two letters(encode) at a time
    //find where they are in pArray
    //add to result
    //REMEMBER array starts @ 0, but when decoding it will assume it starts @ 1


    //for encoding
    //for loop through pArray to use findIndex() on each array b/c can't use on 2D
    //add 1
    
    //let index2 = pArray[i].findIndex(inputSplit[0])
    // console.log(index2)

    if (encode === true){
      inputSplit.forEach((letter) => {
        if (letter === 'i' || letter === 'j'){
          result += '42'
        }

        if (letter === ' '){result+= ' '}

        for (let i = 0; i<pArray.length; i+=1){
          let index2 = pArray[i].indexOf(letter)
    

          if (index2 !== -1){

            result += (index2+1).toString()
            result += (i+1).toString()
            
          }
        }
      })
      

      return result

    }



    //for decoding
    if (encode === false){

      if (inputSplit.filter((digit) => 
        digit !== ' '
      ).length % 2 == 1){return false}

      let numberPair = ''

      for (let i = 0; i<=input.length; i++){
        
        if (numberPair.length === 2){
          let input2 = Number(numberPair[0]) - 1
          let input1 = Number(numberPair[1]) - 1
          result += pArray[input1][input2]
          numberPair = ''
        }

        if (inputSplit[i] === ' '){
          result += ' '
          continue
        }
        else{
          numberPair += inputSplit[i]
        }

      }

      return result
    }

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
