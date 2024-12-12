# JavaScript Unhandled Cases in switch statement

This repository demonstrates a common error in JavaScript: forgetting to handle all cases in a switch statement. 
The `calculate` function handles basic arithmetic operations. However, it lacks handling for invalid inputs or additional operators, leading to unexpected results or errors.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug
The original code fails to handle edge cases such as division by zero or invalid operators, leading to exceptions or unexpected results. 

## Solution
The solution addresses these issues by explicitly handling the edge cases and providing more robust input validation.