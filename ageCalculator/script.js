let userInput = document.querySelector("#date");
let button = document.querySelector("button");
userInput.max = new Date().toISOString().split("T")[0];
// console.log(userInput.max);

button.onclick = () => {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3 = d2 - d1;
  let m3 = m2 - m1;
  let y3 = y2 - y1;
};
