
// sum function takes in 2 numbers

function sum(a,b) {
    let total = a + b;
    return [total, `The sum of ${a} and ${b} is ${total}.`];
};


let testArray = [2,3,4];

// sumArr function takes in 3 numbers

function sumArray(sumArr) {
    let a = sumArr[0];
    let b = sumArr[1];
    let c = sumArr[2];

    let abSumArray = sum(a,b);
    let abSum = abSumArray[0];

    let totalSumArray = sum(abSum, c);
    let totalSum = totalSumArray[0];

    return [totalSum, `${a}, ${b}, ${c} were added together, and the sum was ${totalSum}`];
};

// testSumArray(testArray);

