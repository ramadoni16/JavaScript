// const password = prompt("buat password");

// password harus sepanjang 6 karakter
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("password valid");
//   } else {
//     console.log("password tidak boleh ada spasi ");
//   }
// } else {
//   console.log("password minimal 6 karakter");
// }

// const password = prompt("buat password");

// if (password.length >= 6 && password.indexOf(" ") == -1) {
//   console.log("password valid");
// } else {
//   console.log("password tidak memenuhi syarat");
// }
// Operator Logic And

// let age = 19;
// let gender = "male";
// if (gender === "male" && age === 19) {
//   console.log("boleh menikah");
// }

const role = prompt("masukka role akun");

if (role !== "admin" || role === "spv") {
  console.log("akses di tolak");
} else {
  console.log("boleh mengaksesnyaa");
}
