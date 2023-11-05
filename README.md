# Sum All Numbers in a Range

This is a JavaScript function that takes an array of two numbers and returns the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first, and the code correctly handles that scenario.

## Usage

To use the `sumAll` function in your JavaScript project, you can simply import it as follows:

```javascript
const sumAll = require('../src/index');

const result = sumAll([4, 1]);
console.log(result); // Output: 10
```
## Installation

You can install the necessary dependencies for running the unit tests using Mocha and Chai as follows:
```bash
npm install mocha chai
```

## Running Tests

You can run the included unit tests to verify the correctness of the `sumAll` function. The tests are located in the `tests/sumAll.test.js` file.
```bash
npx mocha ./sumAll.test.js
```

## Credit
This project was inspired by the "Sum All Numbers in a Range" project from [freeCodeCamp](https://www.freecodecamp.org/). You can find more information about the project on the freeCodeCamp website: [Sum All Numbers in a Range - freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range)
