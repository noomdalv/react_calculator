import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const width = wide ? '50%' : '25%';
  const fontSize = color === 'orange' ? 42 : 34;
  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <button type="button" onClick={() => { handleClick({ name }); }} style={{ background: color, width, fontSize }}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: '#f0f0f0',
};

export default Button;
