/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

to_camel_case("the-stealth-warrior") # returns "theStealthWarrior"

to_camel_case("The_Stealth_Warrior") # returns "TheStealthWarrior"
*/


function toCamelCase(str){
  str = str.split(/[-,_]/);
  var str1 = str[0];
  for(i = 1; i<str.length; i++){
     str1 += str[i].replace(str[i][0], str[i][0].toUpperCase());
  }
  return str1;
}