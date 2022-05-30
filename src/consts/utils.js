import moment from 'moment-timezone';

export const parseDateToIsoWithOffset = (date) => {
  const tzoffset = new Date().getTimezoneOffset() * 60000; // offset in milliseconds

  const localISOTime = new Date(
    new Date(date).getTime() - tzoffset
  ).toISOString();
  return localISOTime;
};

export const parseDate = (date) => {
  const dateTime = date.split('T')[0];
  const hour = date.split('T')[1].split(':')[0];
  return `${dateTime} ${hour}:00`;
};
