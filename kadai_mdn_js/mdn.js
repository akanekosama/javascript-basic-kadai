const date = new Date(2024,(11-1),22);

const [month, day, year] = [
  date.getMonth(11),
  date.getDate(22),
  date.getFullYear(2024),
];

console.log(date.toLocaleString("ja-JP"));