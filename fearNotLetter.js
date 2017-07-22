Missing Letters
******************************************************************
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
******************************************************************

function fearNotLetter(str) {
  var first = str.charCodeAt(0);
  var last = str.charCodeAt(str.length-1);
  
  for(var i=first; i<last;i++){
    if(!str.includes(String.fromCharCode(i))){
      return String.fromCharCode(i);
    }
  }
  return undefined;
}

fearNotLetter("abce");
