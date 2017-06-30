import { myApproach as angys } from './approaches/myApproach';
import { myApproach as franciscos } from './approaches/franciscos';
import { myApproach as pipos } from './approaches/pipo';
import { myApproach as isaacs } from './approaches/isaac';
import { myApproach as jorges } from './approaches/jorge';

var aproacheses: { 
	[key: string]: { 
		fn: Function,
		result?: string,
		time?: number
	}
} = {

	'Angy': {
		fn: angys
	},
	'Francisco': {
		fn: franciscos
	},
	'Pipo': {
		fn: pipos
	},
	'Isaac': {
		fn: isaacs
	},
	'Jorge': {
		fn: jorges
	}


};



var testIO = {

	whiteboard: {
		input: [0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 1 ],
		result: 2,
		iterations: 1000000
	},

	ivanJaberInput: {
		input: [4,4,4,1,1,1],
		result: false,
		iterations: 1000000
	},
	ivanJaberInput2: {
		input: [1,1,2,2,3,3,3],
		result: false,
		iterations: 1000000
	}
}

var start, end, result, times = [];

var testCase = testIO.ivanJaberInput2;

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



