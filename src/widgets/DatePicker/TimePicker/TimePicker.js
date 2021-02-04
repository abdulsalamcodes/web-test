import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import './TimePicker.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Input from '../../../components/Input/Input';
import { TimeContext } from '../../../contexts/TimeContext';
// import * as constant from '../../../shared/getDate';

function TimePicker({ timeToControl, dateSetter }) {
  const {
    amMeridian, pmMeridian, computedTime,
  } = useContext(TimeContext);
  // const { hour, minute } = constant.getTime(startDate);
  return (
    <div>
      <div className="TimePicker">
        <div className="setter">
          <div className=" setter__item">
            <FaChevronUp />
            <DatePicker
              selected={timeToControl}
              onChange={(date) => dateSetter(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h"
              calendarClassName="TimeOnly"
            />
            <FaChevronDown />
          </div>
          <span>:</span>
          <div className="setter__item">
            <FaChevronUp />
            <DatePicker
              selected={timeToControl}
              onChange={(date) => dateSetter(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={1}
              timeCaption="Time"
              dateFormat="mm"
              calendarClassName="TimeOnly"
            />
            <FaChevronDown />
          </div>
        </div>

        <div className="meridians">
          <button type="button" className={`${amMeridian} meridian`}>AM</button>
          <button type="button" className={`${pmMeridian} meridian`}>PM</button>
        </div>
      </div>
      <Input label="Selected Time" value={computedTime(timeToControl)} readOnly />
    </div>

  );
}

TimePicker.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  timeToControl: PropTypes.string.isRequired,
  dateSetter: PropTypes.func.isRequired,
};

export default TimePicker;
