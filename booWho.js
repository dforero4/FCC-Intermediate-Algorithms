Boo who
*****************************************************************************
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*****************************************************************************

function booWho(bool) {

  if(bool === true || bool === false){
    return true;
  }
  return false;
}

booWho([1,2,3,]);
