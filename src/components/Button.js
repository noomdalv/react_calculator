import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, wide } = props;
  const width = wide ? '50%' : '25%';
  const fontSize = color === 'orange' ? 42 : 34;

  return (
    <button type="button" style={{ background: color, width, fontSize }}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
  color: '#f0f0f0',
};

export default Button;
