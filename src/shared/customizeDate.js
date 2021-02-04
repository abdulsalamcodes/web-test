import moment from 'moment';

export function addMinutes(date, minute) {
  return moment(date).add(minute, 'm').toDate();
//   return new Date(date.getTime() + minutes * 60000);
}

export function addHours(date, hour) {
  const newDate = moment(date).add(hour, 'h').toDate();
  return newDate;
}
export function subMinutes(date, minute) {
  return moment(date).subtract(minute, 'm').toDate();
}

export function subHours(date, hour) {
  const newDate = moment(date).subtract(hour, 'h').toDate();
  return newDate;
}

export function setToAm(date) {
  const newDate = moment(date).add(12, 'h').toDate();
  return newDate;
}
export function setToPm(date) {
  const newDate = moment(date).subtract(12, 'h').toDate();
  return newDate;
}

export const decrementDate = (date, amount) => moment(date).subtract(amount, 'm').toDate();
