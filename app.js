//Method yang dimiliki array

// join membuat suatu string dari sebuah array
const avatar = ["api", "Air", "udara"];

console.log(avatar.join());
// Expected output: "api,Air,udara"

console.log(avatar.join("*"));
// Expected output: "apiAirudara"

console.log(avatar.join("-"));
// Expected output: "api-Air-udara"

// reverse membalikkan urutan nilai dari array
const number = ["1", "2", "3"];
console.log("number:", number);
// Expected output: "number:" Array ["1", "2", "3"]
const reversed = number.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["3", "2", "1"]

// Careful: reverse is destructive -- it changes the original array.
console.log("number:", number);
// Expected output: "array1:" Array ["3", "2", "1"]

// slice menyalin sebagian nilai dari array
const hewan = ["semut", "macan", "unta", "bebek", "gajah"];
console.log(hewan.slice(2));
// expected output: Array ["unta", "bebek", "gajah"]
console.log(hewan.slice(2, 4));
// expected output: Array ["unta", "bebek"]
console.log(hewan.slice(1, 5));
// expected output: Array ["macan", "unta", "bebek", "gajah"]
console.log(hewan.slice(-2));
// expected output: Array ["bebek", "gajah"]
console.log(hewan.slice(2, -1));
// expected output: Array ["unta", "bebek"]
console.log(hewan.slice());
// expected output: Array ["semut", "macan", "unta", "bebek", "gajah"]

// splice menghapus atau mengubah element
const bulan = ["Jan", "March", "April", "June"];
bulan.splice(1, 0, "Feb");
// inserts at index 1
console.log(bulan);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
bulan.splice(5, 5, "Des");
// replaces 1 element at index 4
console.log(bulan);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
