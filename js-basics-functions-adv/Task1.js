const handlNum = (num, handleOdd, handleEven) => {
	handleOdd(num);
	handleEven(num);
};

let handleOdd = (num) => {
	const isNumOdd = num % 2 !== 0;
	if (isNumOdd) {
		console.log(`The number ${num} is an odd number.`);
	}
};

let handleEven = (num) => {
	const isNumEven = num % 2 === 0;
	if (isNumEven) {
		console.log(`The number ${num} is an even number.`);
	}
};

handlNum(1, handleOdd, handleEven);
handlNum(2, handleOdd, handleEven);
