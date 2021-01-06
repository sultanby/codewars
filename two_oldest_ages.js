// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  var ages2 = ages.sort(function(a, b) {
  return b - a;
  });
  var ages3 = ages2.slice(0, 2)
  var ages4 = ages3.sort(function(a,b){
    return a - b;
  })
  return(ages4);
}
