import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

function Modal({ show, closeModal, children }) {
  const style = {
    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: show ? '1' : 0,
  };

  return (
    <>
      <Backdrop show={show} onClickHandler={closeModal} />
      <div style={style} className="Modal">
        {children}
      </div>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  show: false,
  children: undefined,
};

export default Modal;
