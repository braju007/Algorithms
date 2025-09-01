const students = [
  { name: "raj", scores: [10, 20, 30] },
  { name: "sonu", scores: [15, 20, 35] },
  { name: "amit", scores: [5, 15, 25] },
  { name: "neha", scores: [40, 10, 30] },
  { name: "priya", scores: [50, 20, 25] },
];

studentWithScore = students.map((o) => ({
  ...o,
  total: o.scores.reduce((acc, cur) => acc + cur, 0),
}));
studentWithScore.sort((a, b) => b.total - a.total);
console.log(
  studentWithScore.filter((o) => o.total === studentWithScore[0].total),
);
// [ { name: 'priya', scores: [ 50, 20, 25 ], total: 95 } ]
