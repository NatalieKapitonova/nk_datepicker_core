# React Datepicker wrapper

[![npm version](https://badge.fury.io/js/nk_datepicker_core.svg)](https://www.npmjs.com/package/nk_datepicker_core)
[![Test](https://github.com/nataliekapitonova/nk_datepicker_core/actions/workflows/test.yml/badge.svg)](https://github.com/nataliekapitonova/nk_datepicker_core/actions/workflows/test.yml)

Wrapper around UI components to build the datepicker.

### Usage

Requires the following UI components:
- Input
- Overlay with calendar

```
const Datepicker = (props: Types.CoreProps) =>
    CorePicker({ Input, CalendarOverlay })(props);
    
 <Datepicker
    name={name}
    value={date}
    onChange={handleChange
    disabled={disabled}
    outputDateFormat={outputDateFormat}
    />
```

Demo: https://nataliekapitonova.github.io/nk_datepicker/examples/date
