// print numbers from 1 to 50 
// if a number divisible by three print "Fizz"
// if a number divisible by five print "Buzz"
// if a number divisible by three and five print "Fizz Buzz"


// using while loop

let num = 1
while (num < 51) {
    if(num%5==0 && num%3==0){
        console.log(`${num} Fizz Buzz`);
    }
    else if(num%5==0){
        console.log(`${num} Buzz`);
    }
    else if(num%3==0){
        console.log(`${num} Fizz`)}
    else{
        console.log(num);
    }
    num++
}   
// using for loop

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}