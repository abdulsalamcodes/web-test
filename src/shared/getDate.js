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
  let hours = date.getHours();
  let merridian = hours >= 12 ? 'pm' : 'am';
  if (hours === 12) {
    merridian = 'am';
  }
  hours %= 12;
  hours = hours || 12;
  const dateObject = {
    hour, minute, merridian,
  };
  return dateObject;
};
