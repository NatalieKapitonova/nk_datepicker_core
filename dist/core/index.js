"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const U = __importStar(require("../utils"));
const DatePicker = ({ Input, CalendarOverlay }) => (props) => {
    const { name, onChange, outputDateFormat = "Date", pattern = "DD.MM.YYYY", disabled = false, } = props;
    const [value, setValue] = react_1.useState(props.value ? U.getDate(props.value) : null);
    const [valueFormatted, setValueFormatted] = react_1.useState(U.formatDateString(value, pattern));
    const [openOverlay, setOpenOverlay] = react_1.useState(false);
    react_1.useEffect(() => {
        if (props.value && props.value !== value) {
            setValue(U.getDate(props.value));
        }
    }, [props.value]);
    /** handlers */
    const handleSelectDate = (d) => {
        setValue(d);
        if (d === null) {
            onChange(null, name);
        }
        else if (outputDateFormat === "ISO") {
            onChange(U.dateToIso(d), name);
        }
        else {
            onChange(d, name);
        }
        setValueFormatted(U.formatDateString(d, props.pattern));
        setOpenOverlay(false);
    };
    /** end handlers */
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Input, { name: name, value: valueFormatted, onChange: onChange, onClick: () => setOpenOverlay(true), disabled: disabled }),
        react_1.default.createElement(CalendarOverlay, { open: openOverlay, onClose: () => setOpenOverlay(false), date: value, onSelectDate: handleSelectDate })));
};
exports.default = DatePicker;
