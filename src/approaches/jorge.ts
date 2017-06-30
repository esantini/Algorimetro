/**
 * In an array, find the number that appears more than 50% of the time.
 */

type trackerData = { [key: number]: number }

export const myApproach = 
function getMajorityNumber(input: number[]): number | boolean{
	if(input.length==1){
		return input[0];
	}
	let counts: trackerData = {};
	let firstHalf = Math.floor(input.length/2);
	let repetitionsToAchieve = firstHalf+1;

	/* First sweep the first half, so as to not add extra validation ifs until the 2nd half */
	for(let i=0; i<firstHalf; i++){
		counts[input[i]] = counts[input[i]] ? counts[input[i]] + 1 : 1;
	}

	for(let i=firstHalf; i<input.length; i++){

		if(counts[input[i]]){ //If it doesn't exist, we don't even care what's in it, it can't be majority
			counts[input[i]]++;
			if(repetitionsToAchieve - counts[input[i]] < input.length-i){
				if(counts[input[i]] === repetitionsToAchieve){
					return input[i];
				}
			}else{
				delete counts[input[i]];
			}
		}
	}

	return false;
}

