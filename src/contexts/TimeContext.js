import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as constant from '../shared/getDate';

export const TimeContext = createContext();
function TimeContextProvider({ children }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date('2023/1/01'));

  const amMeridian = constant.getTime(startDate).merridian === 'am' ? 'active' : null;
  const pmMeridian = constant.getTime(startDate).merridian === 'pm' ? 'active' : null;

  // const { hour, minute, merridian } = constant.getTime(startDate);
  const computedDate = (date) => `${constant.getDate(date).month} ${constant.getDate(date).day}, ${constant.getDate(date).year}`;
  const computedTime = (time) => `${constant.getTime(time).hour} : ${constant.getTime(time).minute} ${constant.getTime(time).merridian}`;

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
