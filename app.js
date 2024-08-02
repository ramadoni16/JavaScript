let maximum = parseInt(prompt("Masukkan nilai maksimal!"));
while (!maximum) {
  maximum = parseInt(prompt("Masukkan nilai Maksimal!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Isi dengan Tebakan pertama Kamu"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Terlalu tinggi! tebak lagi:");
  } else {
    guess = prompt("Terlalu Rendah! Tebak Lagi");
  }
}

alert(`Selamat Tebakan Anda Benar ! Dengan percobaan ${attempts} kali`);
