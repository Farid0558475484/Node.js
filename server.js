const http = require("http");
let counter = 0;

const server = http.createServer((req, res) => {
  counter++;
  res.write("Salam :" + counter);
  res.end();
});

server.listen(3005);
