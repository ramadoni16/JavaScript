const pilihan = "abcd";
for (let i = 1; i <= 10; i++) {
  console.log(`${i}.Soal nomor ${i}:`);
  for (let j = 0; j < pilihan.length; j++) {
    console.log(`     ${pilihan[j]}. Pilihan Jawaban`);
  }
}
