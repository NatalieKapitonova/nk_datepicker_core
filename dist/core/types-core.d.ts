export interface CoreProps {
    name: string;
    value?: Date | string | null;
    disabled?: boolean;
    onChange: (d: DateValue, name: string) => void;
    pattern?: DateFormat;
    outputDateFormat?: OutputDateFormat;
}
export declare type DateFormat = "DD/MM/YYYY" | "DD.MM.YYYY" | "DD-MM-YYYY" | "MM/DD/YYYY" | "MM.DD.YYYY" | "MM-DD-YYYY" | "YYYY/MM/DD" | "YYYY.MM.DD" | "YYYY-MM-DD";
export declare type OutputDateFormat = "Date" | "ISO";
export declare type DateValue = Date | string | null;
