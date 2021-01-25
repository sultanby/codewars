/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  var list = str.split(" ");
  var new_list =[];
  for (var i=0; i<list.length; i++){
    var inner_list = list[i].split("");
    if (list[i].toLowerCase() != list[i].toUpperCase()){
      var n = inner_list[0];
      inner_list.splice(0,1);
      inner_list.push(n);
      inner_list.push("ay");
      new_list.push(inner_list.join(''));
    }
    else{
      new_list.push(list[i]);
    }
  }
  return new_list.join(' ');
}