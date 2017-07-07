export const naiveApproach = function(input: number ): number {
	// validation removed for performance :\
	// if( typeof input != 'number' || input < 1) throw new Error('Wrong input');

	var sBinString = input.toString(2);
	// go from left to right.
	var _1st = sBinString[sBinString.length-1];
	for(let i = sBinString.length-2; i >= 0; i--) {
		// first different character from the initial one determines the index of the switch.
		if( _1st !== sBinString[i] ) {
			return parseInt( switch2chars(sBinString, i), 2 );
		}
	}

	return parseInt( switch2chars('0'+sBinString,0), 2 );
}

function switch2chars(input: string, index: number): string {
	return input.substr(0, index) + input[index+1] + input[index] + input.substr(index+2, input.length);
}