/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
  list = [];
  var rem = 0;
  while (n > 0){
    rem = n % 2;
    list.push(rem);
    n = Math.floor(n / 2);
  }
  var count = 0;
  for(var i=0; i<list.length; i++){
    if (list[i] == 1){
      count += 1;
    }
  }
  return count;
};