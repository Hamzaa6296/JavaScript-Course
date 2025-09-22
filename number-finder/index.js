// Find Max and Min in an Array
// Input: [3, 7, 2, 9, 5] → Output: max=9, min=2

function numCheck (arr){
    let min = arr[0];
    let max = arr[0];
    for (let num = 0; num < arr.length; num++) {
    console.log(arr[num]);
    if (arr[num] < min) {
        min = arr[num]
    }
    if (arr[num] > max) {
        max = arr[num]
    }
}
return {max, min}
}
const nums = [1,2,3,4,5,6];
const result = numCheck(nums)
console.log(`min: ${result.min} max: ${result.max}`);



