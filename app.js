const studentScore = {
  Olivia: 20,
  Liam: 13,
  Emma: 40,
  Noah: 18,
  Amelia: 32,
  Oliver: 10,
  Ava: 11,
  Elijah: 21,
  Sophia: 14,
  Mateo: 22,
};

// for (let student in studentScore) {
//   console.log(`${student} memiliki skor ${studentScore[student]}`);
// }

// MENCARI NILAI RATA-RATA
let total = 0;
let scores = Object.values(studentScore);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
