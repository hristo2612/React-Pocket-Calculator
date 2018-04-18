import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);
  // based on the operation provided, calculate the result of the numbers
  if (operation === '+') {
    return firstNumber.plus(secondNumber).toString();
  }
  if (operation === '-') {
    return firstNumber.minus(secondNumber).toString();
  }
  if (operation === 'x') {
    return firstNumber.times(secondNumber).toString();
  }
  if (operation === '÷') {
    return firstNumber.div(secondNumber).toString();
  }
  if (operation === '%') {
    return firstNumber.mod(secondNumber).toString();
  }
  // if the opertaion is not vaiable, thow an error
  throw Error(`Unknown operation '${operation}'`);
}
