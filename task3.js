const fs = require("fs");
fs.writeFile("welcome.txt", " ---Hello Node---", (err) => {
  if (err) throw err;
  console.log(" file created");
  fs.rename("welcome.txt", "hello.txt", (err) => {
    if (err) throw err;
    console.log("rename completed");
    fs.readFile("./hello.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
});