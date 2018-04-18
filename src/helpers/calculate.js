import operate from './operate';
import isNumber from './isNumber';

export default function calculate(state, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      nextNum: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && state.nextNum === '0') {
      return {};
    }

    if (state.operation) {
      if (state.nextNum) {
        return { nextNum: state.nextNum + buttonName };
      }
      return { nextNum: buttonName };
    }

    if (state.nextNum) {
      return {
        nextNum: state.nextNum + buttonName,
        total: null,
      };
    }

    return {
      nextNum: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (state.nextNum) {
      if (state.nextNum.includes('.')) {
        return {};
      }
      return { nextNum: state.nextNum + '.' };
    }

    if (state.operation) {
      return { nextNum: '0.' };
    }

    if (state.total) {
      if (state.total.includes('.')) {
        return {};
      }
      return { total: state.total + '.' };
    }

    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (state.nextNum && state.operation) {
      return {
        total: operate(state.total, state.nextNum, state.operation),
        nextNum: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === '+/-') {
    if (state.nextNum) {
      return { nextNum: (-1 * parseFloat(state.nextNum)).toString() };
    }

    if (state.total) {
      return { total: (-1 * parseFloat(state.total)).toString() };
    }
    
    return {};
  }

  if (state.operation) {
    return {
      total: operate(state.total, state.nextNum, state.operation),
      nextNum: null,
      operation: buttonName,
    };
  }

  if (!state.nextNum) {
    return { operation: buttonName };
  }

  return {
    total: state.nextNum,
    nextNum: null,
    operation: buttonName,
  };
}