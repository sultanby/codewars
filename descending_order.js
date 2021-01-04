/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
  n_to_string = n.toString();
  n_to_array = n_to_string.split('');
  n_to_sort = n_to_array.sort();
  n_to_desc_sort = n_to_sort.reverse();
  n_back_to_string = n_to_desc_sort.join('');
  n_to_number = parseInt(n_back_to_string, 10)
  return(n_to_number)
}