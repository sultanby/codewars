/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
	list = [];
  var rem = 0;
  while (let i > 0){
  	rem = n % 2;
    console.log("rem" + rem);
    list.push(rem);
    console.log(list);
    console.log("nbefore"+ n);
    n = Math.floor(n / 2);
    console.log("nafter"+ n);
    i++;
  }
};