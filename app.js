// const iniHari = "rabu";
const iniHari = prompt("isikan hari").toLocaleLowerCase();

if (iniHari === "senin") {
  console.log("selamat bekerja kawan!");
} else if (iniHari === "sabtu") {
  console.log("semoga jangan cepat berlalu!");
} else {
  console.log("Yah biasa saja");
}
