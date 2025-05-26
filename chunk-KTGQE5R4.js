import {
  NativeDateAdapter
} from "./chunk-DMGY2MF4.js";

// apps/findqo-ireland/src/app/core/adapters/date-picker.adapter.ts
var DatePickerAdapter = class extends NativeDateAdapter {
  // Format Date object to string
  format(date) {
    const DAY = date.getDate();
    const MONTH = date.toLocaleString("default", { month: "long" });
    const YEAR = date.getFullYear();
    return `${this.pad(DAY)} ${MONTH}, ${YEAR}`;
  }
  pad(n) {
    return n < 10 ? "0" + n : n.toString();
  }
};

export {
  DatePickerAdapter
};
//# sourceMappingURL=chunk-KTGQE5R4.js.map
