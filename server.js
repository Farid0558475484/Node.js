const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  switch (req.url) {
    
    case "/home": {
      fs.readFile("pages/about.html", (err, data) => {
        if (err) res.write("404 Not Found");
        else res.write(data);
        res.end();
      });

      break;
    }

    default: {
      res.write("404 Not Found mau");
      res.end();
    }
  }
});

server.listen(3000);
