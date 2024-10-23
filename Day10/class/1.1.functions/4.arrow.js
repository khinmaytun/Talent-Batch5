const functionName = (parameters) => {
    // Code to be executed
  };

const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // 20

const square = x => x * x;
console.log(square(3)) //9

const add = (val1, val2) => val1 + val2
console.log(add(2,4))

//with return
const add1 = (val1, val2) => {
  console.log( `This is addition of ${val1} and ${val2}`)
  return val1 + val2
}
console.log(add1(2,4))
