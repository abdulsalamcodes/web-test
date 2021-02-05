import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../shared/getDate';
import {
  addMinutes, addHours, subHours, subMinutes, setToAm, setToPm,
} from '../shared/customizeDate';

export const TimeContext = createContext();
function TimeContextProvider({ children }) {
  const initialStartDate = new Date();
  // end date should be dynamic.
  const initialEndDate = new Date('2023/1/01');
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const [showStatus, setShowStatus] = useState(false);
  const [showEndDateModal, setShowEndDateModal] = useState(false);

  const amMeridian = (time) => (helpers.getTime(time).merridian === 'am' ? 'active' : null);
  const pmMeridian = (time) => (helpers.getTime(time).merridian === 'pm' ? 'active' : null);

  const computedDate = (date) => `${helpers.getDate(date).month} ${helpers.getDate(date).day}, ${helpers.getDate(date).year}`;
  const computedTime = (time) => `${helpers.getTime(time).hour} : ${helpers.getTime(time).minute} ${helpers.getTime(time).merridian}`;

  const handleIncrementDate = (date, amount, action) => {
    const newDate = addMinutes(date, amount);
    action(newDate);
  };

  const handleIncrementHour = (date, amount, action) => {
    const newDate = addHours(date, amount);
    action(newDate);
  };

  const handleDecrementDate = (date, amount, action) => {
    const newDate = subMinutes(date, amount);
    action(newDate);
  };

  const handleDecrementHour = (date, amount, action) => {
    const newDate = subHours(date, amount);
    action(newDate);
  };

  const handleSetToAm = (date, action) => {
    const newDate = setToAm(date);
    action(newDate);
  };

  const handleSetToPm = (date, action) => {
    const newDate = setToPm(date);
    action(newDate);
  };

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
        handleIncrementHour,
        pmMeridian,
        computedDate,
        computedTime,
        startDate,
        setStartDate,
        setEndDate,
        endDate,
        onSubmitModal,
        showStatus,
        showEndDateModal,
        setShowEndDateModal,
        setShowStatus,
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
