function divide(numerator, denominator){
    if(denominator===0) {
        throw new Error("Can't divide by 0");
    }
    if(typeof numerator !== 'number' || typeof denominator !== 'number'){
        throw new Error("Both arguments must be numbers.");
    }
    return numerator / denominator
}

function testDivide(numerator, denominator) {
    try {
        const result = divide(numerator, denominator);
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Job completed");
    }
}

testDivide(10, 2);       
testDivide(10, 0);       
testDivide(10, "five"); 