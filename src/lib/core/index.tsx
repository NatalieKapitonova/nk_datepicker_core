import React, { useState, useEffect } from "react";
import { UIProps } from "./types-ui";
import { CoreProps } from "./types-core";

import * as U from "../utils";

const DatePicker = ({ Input, CalendarOverlay }: UIProps) => (
  props: CoreProps
): JSX.Element => {
  const {
    name,
    onChange,
    outputDateFormat = "Date",
    pattern = "DD.MM.YYYY",
    disabled = false,
  } = props;

  const [value, setValue] = useState<Date | null>(
    props.value ? U.getDate(props.value) : null
  );
  const [valueFormatted, setValueFormatted] = useState<string | null>(
    U.formatDateString(value, pattern)
  );
  const [openOverlay, setOpenOverlay] = useState<boolean>(false);

  useEffect(() => {
    if (props.value && props.value !== value) {
      setValue(U.getDate(props.value));
    }
  }, [props.value]);

  /** handlers */
  const handleSelectDate = (d: Date | null) => {
    setValue(d);

    if (d === null) {
      onChange(null, name);
    } else if (outputDateFormat === "ISO") {
      onChange(U.dateToIso(d), name);
    } else {
      onChange(d, name);
    }
    setValueFormatted(U.formatDateString(d, props.pattern));
    setOpenOverlay(false);
  };
  /** end handlers */

  return (
    <>
      <Input
        name={name}
        value={valueFormatted}
        onChange={onChange}
        onClick={() => setOpenOverlay(true)}
        disabled={disabled}
      />
      <CalendarOverlay
        open={openOverlay}
        onClose={() => setOpenOverlay(false)}
        date={value}
        onSelectDate={handleSelectDate}
      />
    </>
  );
};

export default DatePicker;
