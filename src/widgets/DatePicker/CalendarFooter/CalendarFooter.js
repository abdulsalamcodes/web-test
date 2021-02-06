import React, { useContext } from 'react';
import './CalendarFooter.scss';
import Button from '../../../components/Button/Button';
import { TimeContext } from '../../../contexts/TimeContext';

function CalendarFooter() {
  const {
    onSubmitModal, onCancelModal,
  } = useContext(TimeContext);
  return (
    <div className="buttons">
      <Button label="Cancel" onClick={onCancelModal} />
      <Button label="Done" primary onClick={onSubmitModal} />
    </div>
  );
}

export default CalendarFooter;
