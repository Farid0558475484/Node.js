const fs = require("fs");

fs.readFile("./test.txt", "utf8", (error, data) => {
  fs.watchFile("./test2.txt", `${data} New text`, () => {
    console.log(data);
  });

  console.log(data);
});
