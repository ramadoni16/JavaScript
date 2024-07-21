// Method yang dimiliki array

// push menambahkan item pada akhir array
// pop menghapus item dari paling akhir array
// shift menghapus item dari paling awal array
// unshift menambahkan item pada awal array

let student = ["rama", "agus", "rahman", "surya"];
student.unshift("Herbalife");
student.unshift("puc");
student.unshift("jne");
student.shift();
student[2] = "lampung";
console.log(student);
