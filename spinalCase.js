Spinal Tap Case
**************************************************************************************

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

**************************************************************************************

function spinalCase(str) {
   
  return str.replace(/([a-z])([A-Z])|\s|_/g, '$1-$2').toLowerCase();
  
}

spinalCase("thisIsSpinalTap");
