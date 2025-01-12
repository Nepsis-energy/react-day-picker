import { toEth, toGreg } from "../utils/ethiopicDateUtils.js";

export function startOfYear(date: Date): Date {
  const etDate = toEth(date);
  return toGreg({
    Year: etDate.Year,
    Month: 1,
    Day: 1
  });
}
