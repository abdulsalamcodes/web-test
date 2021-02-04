import React from 'react';
import './Backdrop.css';
import PropTypes from 'prop-types';

function Backdrop({ show, onClickHandler }) {
  return show ? <div className="Backdrop" onClick={onClickHandler} aria-hidden="true" /> : null;
}

Backdrop.propTypes = {
  show: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

Backdrop.defaultProps = {
  show: false,
  onClickHandler: undefined,
};

export default Backdrop;
