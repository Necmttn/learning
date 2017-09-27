


const NanCase = () {
	console.log(Nan === Nan)
}
NanCase() // will log what ?
False

console.log(typeof NaN === "number");
// Will Log what ?
True


// What will the code below output? Explain your answer
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);



0.30000000000000004
false


function isInteger(x) {
	return typeof x === number && x % 1 === 0
}

function isInteger(x) {
	// Math.ceil() or Math.floor() would work as well
	return Math.round(x) === x
}



// Why this is one is wrong ?
function isInteger(x) { return parseInt(x, 10) === x; }



String(1000000000000000000000000000000000000000000000000000000)
// -> '1e+21'

isInteger(1000000000000000000000000000000000000000000000000000000)
// ->  returns false.
