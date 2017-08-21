// Everything Be True
/*****************************************************************************************************
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*****************************************************************************************************/

function truthCheck(collection, pre) {

  var val = true;
  for(var i=0; i<Object.keys(collection).length; i++){
    if(!collection[i].hasOwnProperty(pre)){
        val = false;
    }
    if(Object.values(collection[i]).includes(0) ||
       Object.values(collection[i]).includes(null) ||
       Object.values(collection[i]).includes("") ||
       Object.values(collection[i]).includes(NaN) ||
       Object.values(collection[i]).includes(undefined)
      ){
      val = false;
    }
  }
  return val;
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, 
{"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

