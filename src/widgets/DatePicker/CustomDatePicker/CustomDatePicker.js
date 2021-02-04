import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../../../components/Input/Input';
import { TimeContext } from '../../../contexts/TimeContext';
import './CustomDatePicker.css';

// eslint-disable-next-line react/prop-types
const MyContainer = ({ className, children }) => (
  <div className="CalendarWrapper" style={{ color: '#fff' }}>
    <CalendarContainer className={className}>
      <div style={{ position: 'relative' }}>{children}</div>
    </CalendarContainer>
  </div>
);

function CustomDatePicker({ dateToControl, dateSetter }) {
  const {
    computedDate,
  } = useContext(TimeContext);
  return (
    <div>
      <DatePicker
        dateFormat="MMMM dd, yyyy"
        selected={dateToControl}
        onChange={(date) => dateSetter(date)}
        calendarContainer={MyContainer}
        calendarClassName="Calendar"
        inline
      />
      <Input label="Selected Date" value={computedDate(dateToControl)} readOnly />
    </div>
  );
}
CustomDatePicker.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  dateToControl: PropTypes.string.isRequired,
  dateSetter: PropTypes.func.isRequired,
};

export default CustomDatePicker;
