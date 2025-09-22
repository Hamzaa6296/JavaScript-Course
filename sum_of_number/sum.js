// Sum of All Numbers in an Array
// Input: [1, 2, 3, 4] → Output: 10

// with for loop
function valuesSum(arr){
    let sum = 0;
    for (let num = 0; num < arr.length; num++){
        sum += arr[num]
        
    }
    return sum
};

console.log(valuesSum([5,2,3,4,5]));

// with while loop

function sumValue (arr){
    let sum = 0;
    let num = 0;
    while (num < arr.length) {
        sum += arr[num]
        num++
    }
    return sum
};

console.log(sumValue([5,2,3,4,5]));

