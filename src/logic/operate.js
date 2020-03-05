/*eslint-disable*/
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const a = new Big(numberOne);
  const b = new Big(numberTwo);
  let result;

  switch (operation) {
    case ('÷'):
			try {
				result = a.div(b).toFixed(2).toString();
			} catch(e) {				
				alert("Division by zero error");
				result = null
			}
      break;
    case ('x'):
      result = a.times(b).toString();
      break;
    case ('-'):
      result = a.minus(b).toString();
      break;
    case ('+'):
      result = a.plus(b).toString();
      break;
    case ('%'):
      result = a.times(b / 100).toString();
      break;
    default:
      break;
  }

  return result;
};

export default operate;
