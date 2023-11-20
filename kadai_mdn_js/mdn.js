const date = new Date(2023,(8-1),23);

const [month, day, year] = [
  date.getMonth(8),
  date.getDate(23),
  date.getFullYear(2023),
];

console.log(date.toLocaleString("ja-JP"));