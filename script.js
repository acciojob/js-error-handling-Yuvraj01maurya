//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of operators');
    this.name = this.constructor.name;
  }
}

function evalString(expression) {
  try {
    if (/[^0-9+\-*/\s]/.test(expression)) {
      throw new OutOfRangeError(expression.match(/[^0-9+\-*/\s]/)[0]);
    }

    if (/(\+\+|--|\+\*|\+\/|\/\+|\*\/|\*\*|\/\/)/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[+\/*]/.test(expression)) {
      throw new SyntaxError('Expression should not start with invalid operator');
    }

    if (/[+\/*-]$/.test(expression)) {
      throw new SyntaxError('Expression should not end with invalid operator');
    }

    // Evaluation logic goes here...
    console.log('Expression is valid');
  } catch (error) {
    console.error(error);
  }
}

// Test cases
evalString("1 + 2"); // Valid
evalString("1 - 2"); // Valid
evalString("1 * 2"); // Valid
evalString("1 / 2"); // Valid
evalString("1 + 2 * 3"); // Valid
evalString("1 + 2 / 3"); // Valid
evalString("1 + "); // Expression should not end with invalid operator
evalString("1 + 2 +"); // Expression should not end with invalid operator
evalString("1 + 2 + 3"); // Expression should not end with invalid operator
evalString("1 + + 2"); // Expression should not have an invalid combination of operators
evalString("1 ++ 2"); // Expression should not have an invalid combination of operators
evalString("1 + -2"); // Valid
evalString("1 + +2"); // Expression should not have an invalid combination of operators
evalString("1 + 2 + 3"); // Expression should not end with invalid operator
evalString("1 + +2 + 3"); // Expression should not have an invalid combination of operators
