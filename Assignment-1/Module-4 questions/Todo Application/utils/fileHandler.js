import fs from "fs";

const DB_PATH = "./src/db.json";

export const readDB = () => {
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
};

export const writeDB = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};