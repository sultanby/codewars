/*
Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.
*/

function number2words(n){
  let a = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let b = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if(n >= 0 && n < 20){
    return a[n];
  } 
  if(n >= 20 && n < 100){
    if (n % 10 == 0) {
      return b[Math.floor(n / 10)];
    }
    return b[Math.floor(n / 10)] + "-" + a[n % 10];
  }
  if(n >= 100 && n < 1000){
    if (n % 100 == 0) {
      return a[Math.floor(n / 100)] + " hundred";
    }
    return a[Math.floor(n / 100)] + " hundred " + number2words(n % 100);
  }
  if (n % 1000 == 0) {
      return a[Math.floor(n / 1000)] + " thousand";
    }
  return number2words(Math.floor(n / 1000)) + " thousand " + number2words(n % 1000);
}