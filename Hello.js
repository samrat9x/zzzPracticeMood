const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Look at the picture");
  res.end();
});
server.listen(3000);
