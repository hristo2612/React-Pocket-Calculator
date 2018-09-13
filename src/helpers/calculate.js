import operate from './operate';
import isNumber from './isNumber';

export default function calculate(state, buttonName) {
  
  const { mainNum, secondNum, operator } = state;

  if (buttonName === 'AC') {
    return {
      mainNum: "",
      secondNum: "",
      operator: ""
    };
  }

  if (buttonName === '.') {
    if (secondNum.indexOf('.') < 0 && operator) {
      return {
        secondNum: secondNum + buttonName
      }
    }
    if (mainNum.indexOf('.') < 0) {
      return {
        mainNum: mainNum + buttonName
      }
    }
    return state;
  } 

  if (buttonName === '+/-') {
    if (secondNum) {
      return {
        secondNum: ((-1 * parseFloat(secondNum)).toString())
      }
    }

    if (mainNum) {
      return {
        mainNum: ((-1 * parseFloat(mainNum)).toString())
      }
    }
  }

  if (buttonName === '=') {
    if (secondNum && mainNum && operator) {
      return { 
        mainNum: operate(mainNum, secondNum, operator),
        secondNum: "",
        operator: "" 
      };
    }
  }

  if (isNumber(buttonName)) {
    // IF we already have a MAIN number and an operator
    if (mainNum && operator) {
      return {
        secondNum: secondNum + buttonName
      };
    } else {
      return {
        mainNum: mainNum + buttonName
      }
    }
  } else {
    if (mainNum && secondNum && operator) {
      return {
        mainNum: operate(mainNum, secondNum, operator),
        operator: buttonName,
        secondNum: ""
      }
    }
    return {
      operator: buttonName
    }
  }

  return state;
}