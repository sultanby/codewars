/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) # returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
  var j=0;
  for(var i = 0; i<=arr.length; i++){
    if (arr[j] === 0){
      zero = arr.splice(j, 1);
      arr.push(0);
      //console.log(arr);
    }
    else {
      j+=1;
    }
  }
  return arr;
}