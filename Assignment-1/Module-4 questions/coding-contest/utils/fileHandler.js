const fs = require("fs");

const readDB = () => {
    const data = fs.readFileSync("db.json", "utf-8");
    return JSON.parse(data);
};

const writeDB = (data) => {
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

module.exports = { readDB, writeDB };