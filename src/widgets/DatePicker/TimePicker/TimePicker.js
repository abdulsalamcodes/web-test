import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import './TimePicker.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Input from '../../../components/Input/Input';
import { TimeContext } from '../../../contexts/TimeContext';
import { AM, PM } from '../../../constants';

function TimePicker({ timeToControl, dateSetter }) {
  const {
    meridianActiveClass,
    computedTime,
    handleIncrementDate,
    handleIncrementHour, handleDecrementHour, handleDecrementDate,
    handleSetToPm, handleSetToAm,
  } = useContext(TimeContext);
  // const { hour, minute } = constant.getTime(startDate);
  return (
    <div className="TimePicker__Wrapper">
      <div className="TimePicker">
        <div className="setter">
          <div className=" setter__item">
            <FaChevronUp className="control_icon" onClick={() => handleIncrementHour(timeToControl, 1, dateSetter)} />
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
            <FaChevronDown className="control_icon" onClick={() => handleDecrementHour(timeToControl, 1, dateSetter)} />
          </div>
          <span>:</span>
          <div className="setter__item">
            <FaChevronUp className="control_icon" onClick={() => handleIncrementDate(timeToControl, 1, dateSetter)} />
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
            <FaChevronDown className="control_icon" onClick={() => handleDecrementDate(timeToControl, 1, dateSetter)} />
          </div>
        </div>

        <div className="meridians">
          <button type="button" onClick={() => handleSetToAm(timeToControl, dateSetter)} className={`${meridianActiveClass(timeToControl, AM)} meridian`}>AM</button>
          <button type="button" onClick={() => handleSetToPm(timeToControl, dateSetter)} className={`${meridianActiveClass(timeToControl, PM)} meridian`}>PM</button>
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
  timeToControl: PropTypes.object.isRequired,
  dateSetter: PropTypes.func.isRequired,
};

export default TimePicker;
