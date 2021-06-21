// UI Elements props
export interface InputProps {
  name: string;
  value?: string | null;
  onChange: any; // for now
  placeholder?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface CalendarOverlayProps {
  date?: Date | null;
  onSelectDate: (date: Date | null) => void;
  day?: number;
  month?: number;
  year?: number;
}

export interface OverlayProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  [prop: string]: any;
}

// UI elements
export interface UIProps {
  Input: (props: InputProps) => JSX.Element;
  Calendar: (props: CalendarOverlayProps) => JSX.Element;
  Overlay: (props: OverlayProps) => JSX.Element;
}
