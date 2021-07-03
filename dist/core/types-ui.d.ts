/// <reference types="react" />
export interface InputProps {
    name: string;
    value?: string | null;
    onChange: any;
    placeholder?: string;
    onClick?: () => void;
    disabled?: boolean;
}
export interface CalendarOverlayProps {
    open: boolean;
    onClose: () => void;
    date?: Date | null;
    onSelectDate: (date: Date | null) => void;
    day?: number;
    month?: number;
    year?: number;
}
export interface UIProps {
    Input: (props: InputProps) => JSX.Element;
    CalendarOverlay: (props: CalendarOverlayProps) => JSX.Element;
}
