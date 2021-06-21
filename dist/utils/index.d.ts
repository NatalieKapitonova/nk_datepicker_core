import * as T from "../core/types-core";
/**
 * Converts Date object into the pre-formatted string to output in the input field
 * @param d
 * @param pattern
 */
export declare const formatDateString: (d?: Date | null | undefined, pattern?: T.DateFormat | undefined) => string | null;
/**
 * Converts 1-2 digit number into 2-digit
 * @param n  number
 */
export declare const getPadding: (n: number) => string;
/**
 * Converts Date into ISO string
 * To avoid UTC formatting - convert the date object into a new object first
 * @see https://medium.com/fredwong-it/js-datetime-bug-auto-set-back-one-day-53d5d5e3903b
 * @param d input Date object
 */
export declare const dateToIso: (d: Date) => string;
/**
 * Inits the date for the calendar with Date object or null
 * @param d
 */
export declare const getDate: (d?: string | Date | null | undefined) => Date | null;
