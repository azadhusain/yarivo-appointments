/**
 * Date manipulation, formatters, and boundary date generators.
 */

function formatDateYYYYMMDD(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getTodayString() {
  return formatDateYYYYMMDD(new Date());
}

function getFutureDateString(daysInFuture = 1) {
  const d = new Date();
  d.setDate(d.getDate() + daysInFuture);
  return formatDateYYYYMMDD(d);
}

function getNextWeekday(targetDayOfWeek = 1) {
  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const d = new Date();
  d.setDate(d.getDate() + 1); // Start tomorrow
  while (d.getDay() !== targetDayOfWeek) {
    d.setDate(d.getDate() + 1);
  }
  return formatDateYYYYMMDD(d);
}

function getPastDateString(daysInPast = 1) {
  const d = new Date();
  d.setDate(d.getDate() - daysInPast);
  return formatDateYYYYMMDD(d);
}

module.exports = {
  formatDateYYYYMMDD,
  getTodayString,
  getFutureDateString,
  getNextWeekday,
  getPastDateString,
};
