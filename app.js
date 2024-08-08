// const hasil = jumlahkan(1, 2);

// function jumlahkan(a, b) {
//   const total = a + b;
//   return total;
// }
// console.log(jumlahkan(5, 8));

function jumlahkan(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    // return false;
    return "bukan angka";
  }
  return a + b;
}
console.log(jumlahkan("a", "b"));
console.log(jumlahkan(3, 4));
