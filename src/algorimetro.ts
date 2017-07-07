import { naiveApproach as naive } from './approaches/naiveApproach';

var aproacheses: { 
	[key: string]: { 
		fn: Function,
		result?: string,
		time?: number
	}
} = {

	'naive': {
		fn: naive
	}

};



var testIO = {

	whiteboard: {
		input: 7,
		result: 11,
		iterations: 1000000
	}
}

var start, end, result, times = [];

var testCase = testIO.whiteboard;

for(var aproach in aproacheses) {

	if(aproacheses[aproach].fn.toString().indexOf('console') > -1) {
		console.warn(aproach + "'s aproach prints in the console");
		continue;
	}

	start = new Date();
	for (var manyLoops = testCase.iterations; manyLoops >= 0; manyLoops--) {
		result = aproacheses[aproach].fn(
			testCase.input
		);
	};
	end = new Date();

	if(result != testCase.result ) {

		console.warn(aproach + "'s result is:", result, "... which is wrong. Expected: ", testCase.result );

	}

	var timeElapsed = end.getTime() - start.getTime();
	aproacheses[aproach].result = result;
	aproacheses[aproach].time = timeElapsed;

	if(aproach != 'warmitup'){

		console.log(aproach + "'s total time: " + timeElapsed );

	}

}



