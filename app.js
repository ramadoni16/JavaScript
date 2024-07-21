//Method yang dimiliki array
// concat - menggabungkan array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

// includes mencari suatu nilai di dalam array
const hewan = [1, 2, 3];
console.log(hewan.includes(2));
// expected output: true
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// expected output: true
console.log(pets.includes("at"));
// expected output: false

// indexOf sama kaya string.indexOf
const nama = ["ori", "manggo", "mandarin", "nrg", "line 1000"];
console.log(nama.indexOf("ori"));
// expected output: 1
// start from index 2
console.log(nama.indexOf("mandarin"));
// expected output: 4
console.log(nama.indexOf("multivitamin"));
// expected output: 1

// join membuat suatu string dari sebuah array
// reverse membalikkan urutan nilai dari array
// slice menyalin sebagian nilai dari array
// splice menghapus atau mengubah element
// sort - mengurutkan nilai pada array
const bulan = ["March", "Jan", "Feb", "Dec"];
bulan.sort();
console.log(bulan);
// expected output: Array ["Dec", "Feb", "Jan", "March"]
const angka = [1, 30, 4, 21, 100000];
angka.sort();
console.log(angka);
// expected output: Array [1, 100000, 21, 30, 4]
