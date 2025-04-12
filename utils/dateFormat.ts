import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Initialize dayjs plugins
dayjs.extend(relativeTime);

export const formatTimeAgo = (dateString: string): string => {
  const date = dayjs(dateString);
  return date.fromNow();
};

export const formatDate = (dateString: string): string => {
  return dayjs(dateString).format("YYYY-MM-DD HH:mm:ss");
};
