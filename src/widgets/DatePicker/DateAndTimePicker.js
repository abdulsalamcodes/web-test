import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Input from '../../components/Input/Input';
import './DateAndTimePicker.scss';
import Modal from '../../components/Modal/Modal';
import { TimeContext } from '../../contexts/TimeContext';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarFooter from './CalendarFooter/CalendarFooter';
import Calendar from './Calendar/Calendar';

function DateAndTimePicker() {
  const {
    computedDate, computedTime, startDate, endDate, setShowStartDateModal,
    showStartDateModal,
    showEndDateModal,
    setShowEndDateModal, setEndDate, setStartDate,
  } = useContext(TimeContext);

  const status = showStartDateModal || showEndDateModal;
  const content = showEndDateModal
    ? <Calendar action={setEndDate} dateToControl={endDate} />
    : <Calendar dateToControl={startDate} action={setStartDate} />;

  const handleClosingModal = () => {
    setShowEndDateModal(!status);
    setShowStartDateModal(!status);
  };

  return (
    <div className="Board">
      <div className="d-flex">
        <Input size="medium" clickable label="Start Date" value={`${computedDate(startDate)} - ${computedTime(startDate)}`} readOnly onClick={() => setShowStartDateModal(true)} />
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
// DateAndTimePicker.propTypes = {
//   startDateProp: PropTypes.object,
//   endDateProp: PropTypes.object,
// };
// DateAndTimePicker.defaultProps = {
//   startDateProp: new Date(),
//   endDateProp: new Date('[2023/12/05]'),
// };
