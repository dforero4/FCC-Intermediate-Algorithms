// Roman Numeral Converter
/*************************************************************
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*************************************************************/

function convertToRoman(num) {
  var arr = [];
  var dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var rom = ["M","CM", "D" ,"CD" ,"C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
      
  for(var i=0; i<dec.length; i++){
    while(num%dec[i]<num){
      arr.push(rom[i]);
      num -= dec[i];
    }
  }
  
  return arr.join("");
}

convertToRoman(36);
