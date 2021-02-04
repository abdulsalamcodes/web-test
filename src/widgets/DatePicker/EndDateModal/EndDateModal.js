import React, { useContext } from 'react';
import Button from '../../../components/Button/Button';
import { TimeContext } from '../../../contexts/TimeContext';
import TimePicker from '../TimePicker/TimePicker';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';

function EndDateModal() {
  const {
    endDate, setEndDate,
  } = useContext(TimeContext);
  return (
    <>
      <div className="Calendar__Heading">
        <h4>Set Time and Date</h4>
        <p>Choose the time and date to hold your event</p>
      </div>

      <div className="Calendar__Content">
        <CustomDatePicker dateToControl={endDate} dateSetter={(date) => setEndDate(date)} />
        <TimePicker timeToControl={endDate} dateSetter={(date) => setEndDate(date)} />
      </div>

      <div className="buttons">
        <Button label="Cancel" />
        <Button label="Done" primary />
      </div>
    </>
  );
}

export default EndDateModal;
