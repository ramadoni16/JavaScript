const studentRow = [
  ["Olivia", "Liam", "Emma", "Noah"],
  ["Amelia", "Oliver", "Ava", "Elijah"],
  ["Sophia", "Mateo", "Isabella", "Lucas"],
];

for (let i = 0; i < studentRow.length; i++) {
  const row = studentRow[i];
  console.log(`Seat Row #${i + 1}`);

  for (let j = 0; j < row.length; j++) {
    // console.log(row[j]);
    console.log(`   ${row[j]}`);
  }
}

// const pilihan = "abcd";
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}.Soal nomor ${i}:`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`     ${pilihan[j]}. Pilihan Jawaban`);
//   }
// }
