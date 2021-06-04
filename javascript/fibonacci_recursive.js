function fibonacci(n) {
  // type your code here
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
//the code will always reduce the numbers down to 0 and 1 and add all the values together in the end
// And a written explanation of your solution
