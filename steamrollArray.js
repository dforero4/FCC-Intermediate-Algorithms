// Steamrollers
/************************************************************************

Flatten a nested array. You must account for varying levels of nesting.

************************************************************************/

function steamrollArray(arr) {
  return flatten(arr);
}

function flatten(arr){
  return arr.reduce(function(acc, val) {
    return acc.concat(
      Array.isArray(val) ? flatten(val) : val
    );
  },[]);
} 

steamrollArray([1, [], [3, [[4]]]]);
