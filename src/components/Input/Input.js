import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input({
  clickable, size, label, onClick, onChange, ...rest
}) {
  const classnames = `Input ${size}`;
  // const style = { cursor: 'pointer' };
  return (
    <div>
      {label && <label htmlFor={label} className="Label">{label}</label>}
      <input
        type="text"
        style={clickable ? { cursor: 'pointer' } : {}}
        className={classnames}
        onChange={onChange}
        onClick={clickable ? onClick : undefined}
        onKeyPress={onClick}
        {...rest}
      />
    </div>
  );
}

export default Input;
Input.propTypes = {
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * What is the input field for?
   */
  label: PropTypes.string,
  /**
   * Optional onChange handler
   */
  onChange: PropTypes.func,
  /**
   * Is it clickable?
   */
  clickable: PropTypes.bool,
  /**
   * What action should be performed when clicked?
   */
  onClick: PropTypes.func,
};

Input.defaultProps = {
  size: 'medium',
  onClick: undefined,
  clickable: false,
  label: 'This is a Input',
  onChange: undefined,
};
