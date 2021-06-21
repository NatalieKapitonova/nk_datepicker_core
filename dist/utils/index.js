"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = exports.dateToIso = exports.getPadding = exports.formatDateString = void 0;
/**
 * Converts Date object into the pre-formatted string to output in the input field
 * @param d
 * @param pattern
 */
const formatDateString = (d, pattern) => {
    if (d === null || d === undefined) {
        return null;
    }
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    switch (pattern) {
        case "DD.MM.YYYY":
            return [exports.getPadding(day), exports.getPadding(month), year].join(".");
        case "DD/MM/YYYY":
            return [exports.getPadding(day), exports.getPadding(month), year].join("/");
        case "DD-MM-YYYY":
            return [exports.getPadding(day), exports.getPadding(month), year].join("-");
        case "MM.DD.YYYY":
            return [exports.getPadding(month), exports.getPadding(day), year].join(".");
        case "MM/DD/YYYY":
            return [exports.getPadding(month), exports.getPadding(day), year].join("/");
        case "MM-DD-YYYY":
            return [exports.getPadding(month), exports.getPadding(day), year].join("-");
        case "YYYY.MM.DD":
            return [year, exports.getPadding(month), exports.getPadding(day)].join(".");
        case "YYYY/MM/DD":
            return [year, exports.getPadding(month), exports.getPadding(day)].join("/");
        case "YYYY-MM-DD":
            return [year, exports.getPadding(month), exports.getPadding(day)].join("-");
        default:
            return [exports.getPadding(day), exports.getPadding(month), year].join(".");
    }
};
exports.formatDateString = formatDateString;
/**
 * Converts 1-2 digit number into 2-digit
 * @param n  number
 */
const getPadding = (n) => {
    if (n < 10) {
        return `0${n}`;
    }
    return n.toString();
};
exports.getPadding = getPadding;
/**
 * Converts Date into ISO string
 * To avoid UTC formatting - convert the date object into a new object first
 * @see https://medium.com/fredwong-it/js-datetime-bug-auto-set-back-one-day-53d5d5e3903b
 * @param d input Date object
 */
const dateToIso = (d) => {
    const stringFormatted = exports.formatDateString(d, "YYYY-MM-DD");
    if (stringFormatted === null || typeof stringFormatted === "undefined") {
        throw Error("This should not happen");
    }
    return new Date(stringFormatted).toISOString();
};
exports.dateToIso = dateToIso;
/**
 * Inits the date for the calendar with Date object or null
 * @param d
 */
const getDate = (d) => {
    if (!d) {
        return null;
    }
    if (typeof d === "string") {
        return new Date(d);
    }
    return d;
};
exports.getDate = getDate;
