import React, { useContext } from 'react';
import Button from '../../../components/Button/Button';
import { TimeContext } from '../../../contexts/TimeContext';
import TimePicker from '../TimePicker/TimePicker';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';

function StartDateModal() {
  const {
    startDate, setStartDate, onSubmitModal, onCancelModal,
  } = useContext(TimeContext);
  return (
    <>
      <div className="Calendar__Heading">
        <h4>Set Time and Date</h4>
        <p>Choose the time and date to hold your event</p>
      </div>

      <div className="Calendar__Content">
        <CustomDatePicker dateToControl={startDate} dateSetter={(date) => setStartDate(date)} />
        <TimePicker timeToControl={startDate} dateSetter={(date) => setStartDate(date)} />
      </div>

      <div className="buttons">
        <Button label="Cancel" onClick={onCancelModal} />
        <Button label="Done" primary onClick={onSubmitModal} />
      </div>
    </>
  );
}

export default StartDateModal;
