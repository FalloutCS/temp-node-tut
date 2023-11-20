const { readFile, writeFile } = require("fs");

console.log("Starting Seshion");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `this is the restult: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const timeout = setTimeout(() => {
          console.log("Files have been written");
        }, 1000);
      }
    );
  });
});

console.log("starting next sesh");
