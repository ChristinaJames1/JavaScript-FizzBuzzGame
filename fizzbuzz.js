console.log("The following will count from numbers 1 to 100,");
console.log("multiples of 3 display 'Fizz'");
console.log("multiples of 5 display 'Buzz'");
console.log("multiples of 3 & 5 display 'FizzBuzz'");
console.log("All other numbers display as they are:\n");

for (let n=1;n <= 101; n++){
    let output ='';
if(n % 3==0) output += 'Fizz';
if(n % 5==0) output += 'Buzz';

console.log(output || n);
}