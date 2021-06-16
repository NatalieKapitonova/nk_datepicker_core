import * as T from "../core/types-core";

/**
 * Converts Date object into the pre-formatted string to output in the input field
 * @param d
 * @param pattern
 */
export const formatDateString = (
  d?: Date | null,
  pattern?: T.DateFormat
): string | null => {
  if (d === null || d === undefined) {
    return null;
  }
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  switch (pattern) {
    case "DD.MM.YYYY":
      return [getPadding(day), getPadding(month), year].join(".");
    case "DD/MM/YYYY":
      return [getPadding(day), getPadding(month), year].join("/");
    case "DD-MM-YYYY":
      return [getPadding(day), getPadding(month), year].join("-");
    case "MM.DD.YYYY":
      return [getPadding(month), getPadding(day), year].join(".");
    case "MM/DD/YYYY":
      return [getPadding(month), getPadding(day), year].join("/");
    case "MM-DD-YYYY":
      return [getPadding(month), getPadding(day), year].join("-");
    case "YYYY.MM.DD":
      return [year, getPadding(month), getPadding(day)].join(".");
    case "YYYY/MM/DD":
      return [year, getPadding(month), getPadding(day)].join("/");
    case "YYYY-MM-DD":
      return [year, getPadding(month), getPadding(day)].join("-");
    default:
      return [getPadding(day), getPadding(month), year].join(".");
  }
};

/**
 * Converts 1-2 digit number into 2-digit
 * @param n  number
 */
export const getPadding = (n: number): string => {
  if (n < 10) {
    return `0${n}`;
  }
  return n.toString();
};

/**
 * Converts Date into ISO string
 * To avoid UTC formatting - convert the date object into a new object first
 * @see https://medium.com/fredwong-it/js-datetime-bug-auto-set-back-one-day-53d5d5e3903b
 * @param d input Date object
 */
export const dateToIso = (d: Date): string => {
  const stringFormatted = formatDateString(d, "YYYY-MM-DD");
  if (stringFormatted === null || typeof stringFormatted === "undefined") {
    throw Error("This should not happen");
  }
  return new Date(stringFormatted).toISOString();
};

/**
 * Inits the date for the calendar with Date object or null
 * @param d
 */
export const getDate = (d?: string | Date | null): Date | null => {
  if (!d) {
    return null;
  }
  if (typeof d === "string") {
    return new Date(d);
  }

  return d;
};
