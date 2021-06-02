function roll(arr, totalSides){
		//[1, 1, 1]
    var combination = new Array(totalSides).fill(1);
    var combinationInt = parseInt(combination.join(''));
    var combinationLimit =  combinationInt*6;
    // your code here
    for(combinationInt; combinationInt <= combinationLimit; combinationInt++){
    	console.log(combinationInt);
    }
    return combinationInt;
}

console.log(roll(12, 2));
