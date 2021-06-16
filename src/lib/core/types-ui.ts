// UI Elements props
export interface InputProps {
  name: string;
  value?: string | null;
  onChange: any; // for now
  placeholder?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface Calendar {
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
}

// UI elements
export interface UIProps {
  Input: (props: InputProps) => JSX.Element;
  Calendar: (props: Calendar) => JSX.Element;
  Overlay: (props: OverlayProps) => JSX.Element;
}
