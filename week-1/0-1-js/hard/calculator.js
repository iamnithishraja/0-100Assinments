/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note:
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor() {
    this.result = 0;
    this.precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2
    };
  }

  isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }

  getPrecedence(operator) {
    return this.precedence[operator] || 0;
  }

  infixToPostfix(expression) {
    const tokens = expression.match(/\d+\.\d+|\d+|\+|\-|\*|\/|\(|\)/g);
    const output = [];
    const stack = [];

    tokens.forEach(token => {
      if (!isNaN(token)) {
        output.push(parseFloat(token));
      } else if (token === '(') {
        stack.push(token);
      } else if (token === ')') {
        while (stack.length && stack[stack.length - 1] !== '(') {
          output.push(stack.pop());
        }
        if (stack.length === 0) {
          throw new Error('Invalid expression: Unbalanced parentheses');
        }
        stack.pop();
      } else {
        while (
          stack.length && this.getPrecedence(stack[stack.length - 1]) >= this.getPrecedence(token)) {
          output.push(stack.pop());
        }
        stack.push(token);
      }
    });

    if (stack.includes('(')) {
      throw new Error('Invalid expression: Unbalanced parentheses');
    }

    while (stack.length) {
      output.push(stack.pop());
    }
    return output.filter(token => token !== '(' && token !== ')');
  }

  evaluatePostfix(expression) {
    const stack = [];
    expression.forEach(token => {
      if (!isNaN(token)) {
        stack.push(token);
      } else if (this.isOperator(token)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        switch (token) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            if (operand2 === 0) {
              throw new Error('Division by zero is not allowed');
            }
            stack.push(operand1 / operand2);
            break;
        }
      }
    });
    return stack.pop();
  }


  add(inputNumber) {
    if (typeof inputNumber === 'number') {
      this.result += inputNumber;
      return this.result;
    }
  }

  subtract(inputNumber) {
    if (typeof inputNumber === 'number') {
      this.result -= inputNumber;
      return this.result;
    }
  }

  multiply(inputNumber) {
    if (typeof inputNumber === 'number') {
      this.result *= inputNumber;
      return this.result;
    }
  }

  divide(inputNumber) {
    if (typeof inputNumber === 'number' && inputNumber !== 0) {
      this.result /= inputNumber;
      return this.result;
    }
    throw new Error('Invalid input');
  }

  clear() {
    this.result = 0;
    return this.result;
  }

  getResult() {
    return this.result;
  }

  calculate(arithmeticOperation) {
    const expression = arithmeticOperation.replace(/\s+/g, '');
    const invalidCharacters = expression.match(/[^0-9+\-*/().]/);
    if (invalidCharacters) {
      throw new Error('Invalid characters found in the expression');
    }
    const postfix = this.infixToPostfix(expression);
    this.result = this.evaluatePostfix(postfix);
    return this.result;
  }

}

// new Calculator().calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7');

module.exports = Calculator;
