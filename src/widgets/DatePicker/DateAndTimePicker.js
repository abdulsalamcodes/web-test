import React, { useContext } from 'react';
import Input from '../../components/Input/Input';
import './DateAndTimePicker.css';
import Modal from '../../components/Modal/Modal';
import { TimeContext } from '../../contexts/TimeContext';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarFooter from './CalendarFooter/CalendarFooter';
import Calendar from './Calendar/Calendar';

function DateAndTimePicker() {
  const {
    computedDate, computedTime, startDate, endDate, setShowStatus, showStatus, showEndDateModal,
    setShowEndDateModal, setEndDate, setStartDate,
  } = useContext(TimeContext);

  const status = showStatus || showEndDateModal;
  const content = showEndDateModal
    ? <Calendar action={setEndDate} dateToControl={endDate} />
    : <Calendar dateToControl={startDate} action={setStartDate} />;

  const handleClosingModal = () => {
    setShowEndDateModal(!status);
    setShowStatus(!status);
  };

  return (
    <div className="Board">
      <div className="d-flex">
        <Input size="medium" clickable label="Start Date" value={`${computedDate(startDate)} - ${computedTime(startDate)}`} readOnly onClick={() => setShowStatus(true)} />
        <Input size="medium" clickable label="End Date" value={`${computedDate(endDate)} - ${computedTime(endDate)}`} readOnly onClick={() => setShowEndDateModal(true)} />
      </div>
      <Modal show={status} closeModal={handleClosingModal}>
        <CalendarHeader action={handleClosingModal} />
        {content}
        <CalendarFooter />
      </Modal>
    </div>
  );
}

export default DateAndTimePicker;
