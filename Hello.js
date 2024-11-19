// const os = require("os");
// console.log(os.platform());
// console.log(os.release());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.cpus());

const fs = require("fs");
fs.readFile("ajax", (err, data) => {
  console.log(data);
});
