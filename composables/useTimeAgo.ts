// composables/useTimeAgo.ts
export const useTimeAgo = (date: MaybeRef<Date | string | number>) => {
  const formatTimeAgo = (): string => {
    const now = new Date();
    const targetDate = new Date(unref(date));
    const diffInMs = now.getTime() - targetDate.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);

    if (diffInSeconds < 1) return "just now";
    if (diffInSeconds < 60)
      return `${diffInSeconds}sec${diffInSeconds > 1 ? "s" : ""} ago`;
    if (diffInMinutes < 60)
      return `${diffInMinutes}min${diffInMinutes > 1 ? "s" : ""} ago`;
    if (diffInHours < 24)
      return `${diffInHours}hr${diffInHours > 1 ? "s" : ""} ago`;
    if (diffInDays < 7)
      return `${diffInDays}day${diffInDays > 1 ? "s" : ""} ago`;
    if (diffInWeeks < 4)
      return `${diffInWeeks}week${diffInWeeks > 1 ? "s" : ""} ago`;
    if (diffInMonths < 12)
      return `${diffInMonths}month${diffInMonths > 1 ? "s" : ""} ago`;

    // For very old dates, fall back to useDateFormat
    const { value: formattedDate } = useDateFormat(date, "MMM DD, YYYY");
    return formattedDate;
  };

  const timeAgo = computed(() => formatTimeAgo());

  return timeAgo;
};
