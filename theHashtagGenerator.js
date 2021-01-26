/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  var hash = "#";
  var str6 = str.trim().split(" ");
  for(var i=0; i<str6.length; i++){
    str6[i] = str6[i].charAt(0).toUpperCase()+str6[i].slice(1);
  }
  var str7 = str6.join('');
  var ans = hash.concat(str7);
  if (ans.length>140 || str7.length == 0){
    return false;
  }
  return ans;
}