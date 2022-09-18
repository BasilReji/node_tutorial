const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("Modules/content/test.txt", "utf8");

const second = readFileSync("Modules/content/subfolder/second.txt", "utf8");

console.log(first, "\n", second);

writeFileSync(
  "Modules/content/test.txt",
  `Here is the result: ${first}, ${second}`
);

Duplicate;

writeFileSync(
  "Modules/content/subfolder/second.txt",
  `Here is the result: ${first}, ${second}`,
  {
    flag: "a",
  }
);
