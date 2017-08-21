/******************************************************************************************************************************
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all 
sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
******************************************************************************************************************************/

function smallestCommons(arr) {
  var min = Math.min(arr[0],arr[1]); 
  var max = Math.max(arr[0],arr[1]);
  var range = [];
  for(let n = min; n<=max; n++){
    range.push(n);
  }
  
  return range.reduce(function(x,y){
    for (let i = x; i<=x*y; i+=x){
      if (i % y===0 ) return i;
    } 
  });

}


smallestCommons([1,5]);
