Pig Latin
*************************************************************************************************************************************
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*************************************************************************************************************************************

function translatePigLatin(str) {
  var notCons = ['a', 'e', 'i', 'o', 'u'];
  
  if(notCons.includes(str.charAt(0))){
    return str+"way";
  }
  
  //This variable is used to get the first instance of a vowel within the word. It is an arbitrarily large number.
  //This is needed for words that may have multiple vowels.
  var first = 100;
  
  for(var i=0; i<notCons.length; i++){
    if(str.indexOf(notCons[i])<first && str.indexOf(notCons[i]) >= 0){
      first = str.indexOf(notCons[i]);
    }
  }
  
  var pre = str.substr(0,first);
  str = str.replace(pre,"");

  return str.concat(pre+"ay");
}

translatePigLatin("glove");
