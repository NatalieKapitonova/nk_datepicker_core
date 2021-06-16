export interface CoreProps {
  name: string;
  value?: Date | string | null;
  disabled?: boolean;
  onChange: (d: DateValue, name: string) => void;
  pattern?: DateFormat;
  outputDateFormat?: OutputDateFormat;
  // calendarFormat?: CalendarFormat;
  // selectMethod?: SelectMethod;
  // showClear?: boolean;
  // showToday?: boolean;
}

export type DateFormat =
  | "DD/MM/YYYY"
  | "DD.MM.YYYY"
  | "DD-MM-YYYY"
  | "MM/DD/YYYY"
  | "MM.DD.YYYY"
  | "MM-DD-YYYY"
  | "YYYY/MM/DD"
  | "YYYY.MM.DD"
  | "YYYY-MM-DD";

// export type SelectMethod = "ok_button" | "lose_focus" | "click_and_close";
export type OutputDateFormat = "Date" | "ISO";
export type DateValue = Date | string | null;
