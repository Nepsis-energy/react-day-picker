import { toEthiopicDate } from "../utils/index.js";

/**
 * Get year
 *
 * @param {Date} date - The original date
 * @returns {number} The year
 */
export function getYear(date: Date): number {
  const { year } = toEthiopicDate(date);
  return year;
}
