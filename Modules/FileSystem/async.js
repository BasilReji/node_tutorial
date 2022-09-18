const { readFile, writeFile } = require("fs");

readFile("Modules/content/test.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("Modules/content/subfolder/second.txt", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "Modules/content/output.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
