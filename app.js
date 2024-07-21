const password = prompt("buat password");

// password harus sepanjang 6 karakter
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("password valid");
  } else {
    console.log("password tidak boleh ada spasi ");
  }
} else {
  console.log("password minimal 6 karakter");
}
