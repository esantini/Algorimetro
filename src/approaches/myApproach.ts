export const myApproach = function(input: number[] ): number | false {
	
	var remaining = input.length;
	const required = Math.floor(remaining/2) + 1;

	var counters: { [key: number]: number } = {};
	var highest: { value: number, count: number } = { value: 0, count: 0 };

	for (var i = 0; i < input.length; i++) {
		remaining--;

		// if exists add one, else create it.
		if( counters[input[i]] ) { counters[input[i]]++; }
		else { counters[input[i]] = 1; }

		// if current most-repeated-value
		if (highest.value === input[i]) {
			highest.count++;
		}
		// else if new most-repeated-value
		else if( counters[input[i]] > highest.count ) {
			highest.value = input[i];
			highest.count = counters[input[i]];
		}

		if (highest.count >= required) {
			return highest.value;
		} else if(highest.count + remaining < required) {
			return false; // false if there aren't enough remaining values to complete mayority.
		}
	}
	throw new Error("Should be imposible to get to this line");
}

var whiteboardInput = [0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 1 ];
var ivanJaberInput = [4,4,4,1,1,1];
var ivanJaberInput2 = [1,1,2,2,3,3,3];

/*
var whiteboardInput = [0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 1 ];
var ivanJaberInput = [4,4,4,1,1,1];
var ivanJaberInput2 = [1,1,2,2,3,3,3];

console.log("Whiteboard's result", myApproach(whiteboardInput));
console.log("Equal ammount input", myApproach(ivanJaberInput));
console.log("2nd Ivan's input", myApproach(ivanJaberInput2));
*/