import moment from 'moment';

export const getPeriod = (start, end) => {
  if (!start) return null;
  const startDate = moment(start, 'YYYY-MM-DD').format('MMMM YYYY');
  const endDate = end
    ? moment(end, 'YYYY-MM-DD').format('MMMM YYYY')
    : 'present';
  return `${startDate} to ${endDate}`;
};

export const getDuration = (start, end) => {
  if (!start) return null;
  const startTime = moment(start, 'YYYY-MM-DD').valueOf();
  const endTime = end
    ? moment(end, 'YYYY-MM-DD').valueOf()
    : moment().valueOf();
  return moment.duration(endTime - startTime).humanize();
};

export const getStackImg = name =>
  `https://raw.githubusercontent.com/gilbarbara/logos/master/logos/${name}.svg`;
