/**
 * Parses "16.11.2021, 00:00 Uhr" to "2021-01-15T23:00:00.000Z"
 */
function parseGermanStringDateToISOString(val) {
  if (val instanceof Date) {
    return val.toISOString();
  }

  const [day, month, year] = val.split(',')[0].split('.');

  // Sometimes people use "20.01.21" instead of "20.01.2021"
  const fixedYear = year.length === 2 ? `20${year}` : year;

  const date = new Date(Number(fixedYear), Number(month) - 1, Number(day));

  return date.toISOString();
}

module.exports = { parseGermanStringDateToISOString };
