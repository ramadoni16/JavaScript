// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

const Password = "Pass123";

let guess = prompt("enter the password");
while (guess !== Password) {
  guess = prompt("enter the password");
}
alert("congrats! the password is correct");
