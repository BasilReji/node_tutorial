const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

// getText("Modules/content/test.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    const start = await getText("Modules/content/test.txt");
    console.log(start);
    const second = await getText("Modules/content/subfolder/second.txt");
    console.log(second);
  } catch (err) {
    console.log(err);
  }
};

// start();

const readWriteFiles = async () => {
  try {
    const start = await readFilePromise("Modules/content/test.txt", "utf-8");
    console.log(start);
    const second = await readFilePromise(
      "Modules/content/subfolder/second.txt",
      "utf-8"
    );

    await writeFilePromise(
      "Modules/content/subfolder/result.txt",
      `This is awesome:${start} ${second}`
    );
    console.log(second);
  } catch (err) {
    console.log(err);
  }
};

// readWriteFiles();
