import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => {
  let display;
  if (result.total) {
    display = !result.operation ? result.total : result.next;
  } else {
    display = '0';
  }

  return (
    <div id="display">{display}</div>
  );
};

Display.propTypes = {
  result: PropTypes.object.isRequired,
};


export default Display;
