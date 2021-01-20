/*
Sort the given strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

sortme = function( names ){
    for(var curr=0; curr<names.length-1; curr++){
      //console.log(names[i]);
      var smal = curr;
      for(var i=curr; i<names.length; i++){
        if(names[i].toLowerCase()<names[smal].toLowerCase()){
          smal=i;
        }
      }
      [names[curr], names[smal]]=[names[smal], names[curr]];
    }
    return names;
}
