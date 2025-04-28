const fs = require("fs");

const readableStream = fs.createReadStream("./article.txt", {
  highWaterMark: 10,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {}
});

readableStream.on("end", () => {
  console.log("end");
});

readableStream.on("error", (err) => {
  console.log(err);
});

readableStream.on("close", () => {
  console.log("close");
});
