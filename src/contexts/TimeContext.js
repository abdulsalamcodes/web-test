import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as constant from '../shared/getDate';

export const TimeContext = createContext();
function TimeContextProvider({ children }) {
  const initialStartDate = new Date();
  const initialEndDate = new Date('2023/1/01');
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const [showStatus, setShowStatus] = useState(false);
  const [showEndDateModal, setShowEndDateModal] = useState(false);

  const amMeridian = constant.getTime(startDate).merridian === 'am' ? 'active' : null;
  const pmMeridian = constant.getTime(startDate).merridian === 'pm' ? 'active' : null;

  // const { hour, minute, merridian } = constant.getTime(startDate);
  const computedDate = (date) => `${constant.getDate(date).month} ${constant.getDate(date).day}, ${constant.getDate(date).year}`;
  const computedTime = (time) => `${constant.getTime(time).hour} : ${constant.getTime(time).minute} ${constant.getTime(time).merridian}`;

  const onSubmitModal = () => {
    setShowEndDateModal(false);
    setShowStatus(false);
    // Submit to an Endpoint.
    return {
      start_date: startDate,
      end_date: endDate,
    };
  };

  const onCancelModal = () => {
    setShowEndDateModal(false);
    setShowStatus(false);
    setStartDate(initialStartDate);
    setEndDate(initialEndDate);
  };

  return (
    <TimeContext.Provider value={
        {
          amMeridian,
          pmMeridian,
          computedDate,
          computedTime,
          startDate,
          setStartDate,
          endDate,
          setEndDate,
          onSubmitModal,
          showStatus,
          showEndDateModal,
          setShowEndDateModal,
          setShowStatus,
          onCancelModal,
        }
      }
    >
      {children}
    </TimeContext.Provider>
  );
}

TimeContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TimeContextProvider;
