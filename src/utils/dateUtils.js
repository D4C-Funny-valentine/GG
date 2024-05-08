import dayjs from "dayjs";

export const formatDate = (date, format) => {
  return dayjs(date).format(format);
};

export const parseDate = (dateString) => {
  return dayjs(dateString).toDate();
};
