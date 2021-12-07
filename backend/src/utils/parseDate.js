// 16.11.2021, 00:00 Uhr
function parseDate(val) {
  const [day, month, year] = val.split(',')[0].split('.');

  const date = new Date(year, month, day);

  return date;
}

module.exports = parseDate;
