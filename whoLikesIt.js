/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
*/

function likes(names) {
  let str_len = names.length;
  if(str_len == 0){
    return("no one likes this")
  }
  else if(str_len == 1){
    return(names.slice(0) + " likes this")
  }
  else if(str_len == 2){
    return(names.slice(0, 1) + " and " + names.slice(1, 2) + " like this")
  }
  else if(str_len == 3){
    return(names.slice(0, 1) + ", " + names.slice(1, 2) + " and " + names.slice(2, 3) + " like this")
  }
  else {
    return(names.slice(0, 1) + ", " + names.slice(1, 2) + " and " + (str_len-2) + " others like this")
  }
}