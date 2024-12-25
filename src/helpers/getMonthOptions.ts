import { defaultLocale, type DateLib } from "../classes/DateLib.js";
import { DropdownOption } from "../components/Dropdown.js";
import type { Formatters } from "../types/index.js";

/** Return the months to show in the dropdown. */
export function getMonthOptions(
  displayMonth: Date,
  navStart: Date | undefined,
  navEnd: Date | undefined,
  formatters: Pick<Formatters, "formatMonthDropdown">,
  dateLib: DateLib
): DropdownOption[] | undefined {
  if (!navStart) return undefined;
  if (!navEnd) return undefined;
  // const year = dateLib.getYear(displayMonth);
  const {
    startOfMonth,
    startOfYear,
    endOfYear,
    eachMonthOfInterval,
    getMonth
  } = dateLib;

  const months = eachMonthOfInterval({
    start: startOfYear(displayMonth),
    end: endOfYear(displayMonth)
  });

  const options = months.map((month) => {
    const label = formatters.formatMonthDropdown(
      month,
      dateLib.options.locale ?? defaultLocale,
      dateLib
    );
    const value = getMonth(month);
    const disabled =
      (navStart && month < startOfMonth(navStart)) ||
      (navEnd && month > startOfMonth(navEnd)) ||
      false;
    return { value, label, disabled };
  });

  return options;
}
