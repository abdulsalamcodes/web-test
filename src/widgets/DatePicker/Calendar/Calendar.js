import React from 'react';
import PropTypes from 'prop-types';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import TimePicker from '../TimePicker/TimePicker';

function Calendar({ dateToControl, action }) {
  return (
    <>
      <CustomDatePicker dateToControl={dateToControl} dateSetter={(date) => action(date)} />
      <TimePicker timeToControl={dateToControl} dateSetter={(date) => action(date)} />
    </>
  );
}

export default Calendar;

Calendar.propTypes = {
  /**
     * Is this the principal call to action on the page?
     */
  dateToControl: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
};
