import React from 'react';
import Proptypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import './CalendarHeader.css';

function CalendarHeader({ action }) {
  return (
    <div className="Calendar__Heading">
      <div>
        <h4>Set Time and Date</h4>
        <p>Choose the time and date to hold your event</p>
      </div>

      <FiX className="Icon" onClick={action} />
    </div>

  );
}

export default CalendarHeader;
CalendarHeader.propTypes = {
  action: Proptypes.func.isRequired,
};
