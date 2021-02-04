import React, { useContext } from 'react';
import Input from '../../components/Input/Input';
import './DateAndTimePicker.css';
import Modal from '../../components/Modal/Modal';
import { TimeContext } from '../../contexts/TimeContext';
import StartDateModal from './StartDateModal/StartDateModal';
import EndDateModal from './EndDateModal/EndDateModal';

function DateAndTimePicker() {
  const {
    computedDate, computedTime, startDate, endDate, setShowStatus, showStatus, showEndDateModal,
    setShowEndDateModal,
  } = useContext(TimeContext);

  return (
    <div className="Board">
      <div className="d-flex">
        <Input size="medium" clickable label="Start Date" value={`${computedDate(startDate)} - ${computedTime(startDate)}`} readOnly onClick={() => setShowStatus(true)} />
        <Input size="medium" clickable label="End Date" value={`${computedDate(endDate)} - ${computedTime(endDate)}`} readOnly onClick={() => setShowEndDateModal(true)} />
      </div>
      <Modal show={showStatus} closeModal={() => setShowStatus(false)}>
        <StartDateModal />
      </Modal>

      <Modal show={showEndDateModal} closeModal={() => setShowEndDateModal(false)}>
        <EndDateModal />
      </Modal>

    </div>
  );
}

export default DateAndTimePicker;
