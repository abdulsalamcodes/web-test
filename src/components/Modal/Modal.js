import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';

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
  /**
   * Content of the modal
   */
  children: PropTypes.any,
  /**
   * Toggle show or hide the modal
   */
  show: PropTypes.bool,
  /**
   * Close the modal
   */
  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  show: false,
  children: undefined,
};

export default Modal;
