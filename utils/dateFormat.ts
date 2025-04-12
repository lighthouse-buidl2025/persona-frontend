import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Initialize dayjs plugins
dayjs.extend(relativeTime);

export const formatTimeAgo = (dateString: string): string => {
  const date = dayjs(dateString);
  return date.fromNow();
};

export const formatDate = (dateString: string): string => {
  return dayjs(dateString).format("MMM DD, YYYY");
};

export const formattedVolume = (data: number) => {
  return Number(data).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
