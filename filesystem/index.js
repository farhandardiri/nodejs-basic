const fs = require("fs").promises;
const path = require("path");

const filePath = path.resolve(__dirname, "notes.txt");

async function readFile() {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (err) {
    console.error(err);
  }
}

readFile();
