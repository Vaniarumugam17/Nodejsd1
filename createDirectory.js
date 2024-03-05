// createDirectory.js

const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "files");

if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath);
  console.log("Directory created successfully.");
} else {
  console.log("Directory already exists.");
}
