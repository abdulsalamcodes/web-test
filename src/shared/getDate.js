import * as constants from '../constants';

export const getDate = (date) => {
  const [month, day, year] = date.toLocaleDateString('en-US').split('/');
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const dateObject = {
    month: monthNames[month - 1],
    day,
    year,
  };
  return dateObject;
};
export const getTime = (date) => {
  const [hour, minute] = date.toLocaleTimeString('en-US').split(/:| /);
  const hours = date.getHours();
  const merridian = hours >= 12 ? constants.PM : constants.AM;
  const dateObject = {
    hour, minute, merridian,
  };
  return dateObject;
};
