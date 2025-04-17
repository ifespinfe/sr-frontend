import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(duration);
dayjs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (...name: string[]) => {
  const [firstname, lastname] = name?.length > 1 ? name : name[0].split(" ");
  return `${firstname ? firstname.at(0) : ""}${
    lastname ? lastname.at(0) : firstname ? firstname.at(1) : ""
  }`;
};

export const decodeBase64 = (data?: string | null, fallback = "") => {
  try {
    if (!data) return fallback;
    return atob(data);
  } catch {
    return fallback ?? null;
  }
};

export const formatMoney = (_number: number | string) => {
  const number = Number(_number);
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 0,
  });
};

export const timeDifference = (
  startDate: Date | string,
  endDate: Date | string
) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  let diffInSeconds = Math.floor((end - start) / 1000);

  const hours = Math.floor(diffInSeconds / 3600);
  diffInSeconds %= 3600;

  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds % 60;

  return {
    hours,
    minutes,
    seconds,
  };
};

export const readableTimeDifference = (
  startDate: Date | string,
  endDate: Date | string
) => {
  const { hours, minutes, seconds } = timeDifference(startDate, endDate);
  const total_hours = hours ? `${hours} hours ` : "";
  const total_minutes = minutes ? `${minutes} min ` : "";
  const total_seconds = seconds ? `${seconds} sec` : "";
  return `${total_hours}${total_minutes}${total_seconds}`;
};

export const formattedTimeDifference = (
  startDate: Date | string,
  endDate: Date | string,
  type?: "default" | "timer"
) => {
  const isTimer = !!type && type === "timer";

  if (!isTimer) {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    let diffInSeconds = Math.floor((end - start) / 1000);

    const weeks = Math.floor(diffInSeconds / (3600 * 24 * 7));
    diffInSeconds %= 3600 * 24 * 7;

    const days = Math.floor(diffInSeconds / (3600 * 24));
    diffInSeconds %= 3600 * 24;

    const hours = Math.floor(diffInSeconds / 3600);
    diffInSeconds %= 3600;

    const minutes = Math.floor(diffInSeconds / 60);
    const seconds = diffInSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  } else {
    const start = dayjs(startDate);
    const end = dayjs(endDate);

    const dayDiff = start.diff(end, "day");

    // Get the duration between two dates
    const diff = dayjs.duration(end.diff(start));

    const weeks = Math.floor(diff.asDays() / 7);
    const days = Math.floor(diff.asDays() % 7);
    const hours = diff.hours();
    const minutes = diff.minutes();
    const seconds = diff.seconds();

    if (diff.asDays() >= 1) {
      return dayjs(start).from(end);
    }

    let result = "";

    if (weeks > 0) {
      result += `${weeks}w: `;
    }

    if (days > 0 || weeks > 0) {
      result += `${days}d: `;
    }

    // Always include hours, minutes, seconds
    result += `${hours ? String(hours).padStart(2, "0") + "h: " : ""} ${
      minutes ? String(minutes).padStart(2, "0") + "m: " : ""
    } ${String(seconds).padStart(2, "0")}s`;

    return result;
  }
};

export const getHexColor = (letter: string) => {
  const colorGroups = {
    group1: "#FF99F1", // A-I
    group2: "#FFEE99", // J-R
    group3: "#A799FF", // S-Z
  };
  const upperLetter = letter.toUpperCase();
  if ("ABCDEFGHI".includes(upperLetter)) {
    return colorGroups.group1;
  }
  if ("JKLMNOPQR".includes(upperLetter)) {
    return colorGroups.group2;
  }
  if ("STUVWXYZ".includes(upperLetter)) {
    return colorGroups.group3;
  }
  return colorGroups.group1;
};
