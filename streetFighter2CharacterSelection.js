/*
Selection Grid Layout in text:
| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
Input
*     the list of game characters in a 2x6 grid;
*     the initial position of the selection cursor (top-left is (0,0));
*     a list of moves of the selection cursor (which are up, down, left, right);
Output
*     the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);
Rules
Selection cursor is circular horizontally but not vertically!
As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.
Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).
*/

function streetFighterSelection(fighters, position, moves){
	let output = [];
  for(let k=0; k<moves.length; k++){
    if (moves[k]=="up"){
      position[0]=0;
    }
    else if (moves[k]=="down"){
      position[0]=1;
    }
    else if (moves[k]=="right"){
      if (position[1]==5){
        position[1]=0;
      }
      else{
      position[1]=position[1]+1;
      }
    }
    else {
      if (position[1]==0){
        position[1]=5;
      }
      else{
      	position[1]=position[1]-1;
      }
    }
    output.push(fighters[position[0]][position[1]]);
  }
  return output;
}
