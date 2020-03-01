import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;

  switch (buttonName) {
    case ('AC'):
      total = '';
      next = '';
      operation = null;
      break;
		case ('1'): case ('2'): case ('3'): case ('4'): case ('5'): case ('6'): case ('7'): case ('8'): case ('9'): case ('0'):
			if (!next && !operation) {
				total += buttonName;
			} else {
				next += buttonName;
			}
			break;
    case ('+/-'):
      if (next) {
        next *= (-1);
      } else {
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
			operation = buttonName;
      break;
    case ('='):
      if (next) {
        total = operate(total, next, operation);
        next = '';
				operation: null;
      }
      break;
    default:
      break;
  }

  return calculatorData;
};
