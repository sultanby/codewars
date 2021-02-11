/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  if (strng == ''){
    return '1';
  }
  let arr = [];
  arr = strng.split('');
  let index = arrayCheck(arr);
  let len=arr.slice(index+1).length;
  if (len==0){
    return strng+'1';
  }
  let number = parseInt(arr.slice(index+1).join(''))+1;
  let string_num = number.toString().padStart(len, '0');
  let string_alpha = arr.slice(0, index+1).join('');
  return string_alpha+string_num;
}

function arrayCheck(arr){
  for (let i=arr.length-1; i>=0; i--){
    if (isNaN(parseInt(arr[i])) == true){
      return i;
    }
  }
}