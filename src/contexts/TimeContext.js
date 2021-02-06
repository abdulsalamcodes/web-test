import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../shared/getDate';
import * as dateHelpers from '../shared/customizeDate';
import * as constants from '../constants';

export const TimeContext = createContext();
function TimeContextProvider({ children }) {
  const [startDate, setStartDate] = useState(constants.INITIAL_START_DATE);
  const [endDate, setEndDate] = useState(constants.INITIAL_END_DATE);

  const [showStartDateModal, setShowStartDateModal] = useState(false);
  const [showEndDateModal, setShowEndDateModal] = useState(false);

  const meridianActiveClass = (time, meridian) => (helpers.getTime(time).merridian === meridian ? 'active' : undefined);
  const computedDate = (date) => `${helpers.getDate(date).month} ${helpers.getDate(date).day}, ${helpers.getDate(date).year}`;
  const computedTime = (time) => `${helpers.getTime(time).hour} : ${helpers.getTime(time).minute} ${helpers.getTime(time).merridian}`;

  const handleIncrementDate = (date, amount, action) => {
    const newDate = dateHelpers.addMinutes(date, amount);
    action(newDate);
  };

  const handleIncrementHour = (date, amount, action) => {
    const newDate = dateHelpers.addHours(date, amount);
    action(newDate);
  };

  const handleDecrementDate = (date, amount, action) => {
    const newDate = dateHelpers.subMinutes(date, amount);
    action(newDate);
  };

  const handleDecrementHour = (date, amount, action) => {
    const newDate = dateHelpers.subHours(date, amount);
    action(newDate);
  };

  const handleSetToAm = (date, action) => {
    const newDate = dateHelpers.setToAm(date);
    action(newDate);
  };

  const handleSetToPm = (date, action) => {
    const newDate = dateHelpers.setToPm(date);
    action(newDate);
  };

  const onSubmitModal = () => {
    setShowEndDateModal(false);
    setShowStartDateModal(false);
    // Submit to an Endpoint.
    return {
      start_date: startDate,
      end_date: endDate,
    };
  };

  const onCancelModal = () => {
    setShowEndDateModal(false);
    setShowStartDateModal(false);
    setStartDate(constants.INITIAL_START_DATE);
    setEndDate(constants.INITIAL_END_DATE);
  };

  return (
    <TimeContext.Provider value={
      {
        meridianActiveClass,
        handleIncrementHour,
        computedDate,
        computedTime,
        startDate,
        setStartDate,
        setEndDate,
        endDate,
        onSubmitModal,
        showStartDateModal,
        showEndDateModal,
        setShowEndDateModal,
        setShowStartDateModal,
        onCancelModal,
        handleIncrementDate,
        handleDecrementDate,
        handleDecrementHour,
        handleSetToPm,
        handleSetToAm,

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
