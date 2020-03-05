/*eslint-disable*/
import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case ('AC'):
      total = null;
      next = null;
      operation = null;
      break;
    case ('1'): case ('2'): case ('3'): case ('4'): case ('5'): case ('6'): case ('7'): case ('8'): case ('9'): case ('0'):
      if (!next && !operation) {
        total === null ? total = buttonName : total += buttonName;
      } else {
				next === null ? next = buttonName : next += buttonName;
      }
      break;
    case ('+/-'):
      if (next) {
        next *= (-1);
      } else if (total && !operation) {
        total *= (-1);
      }
      break;
    case ('.'):
      if (next) {
        next = `${next}.`;
      } else {
        total = `${total}.`;
      }
      break;
    case ('÷'): case ('x'): case ('-'): case ('+'): case ('%'):
      if (total) {
        operation = buttonName;
      }
      break;
    case ('='):
      if (next) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    default:
      return total;
  }

  return { total, next, operation };
};

export default calculate;
