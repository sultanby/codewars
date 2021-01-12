/*
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
  var sorted_ref = word.split('').sort().join('');
  list = [];
  for (i = 0; i<words.length; i++) {
    var sorted_word = words[i].split('').sort().join('');
    if (sorted_ref === sorted_word){
      list.push(words[i]);
    }
  }
  return list;
}