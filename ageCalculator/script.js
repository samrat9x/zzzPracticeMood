let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0];
console.log(userInput.max);
