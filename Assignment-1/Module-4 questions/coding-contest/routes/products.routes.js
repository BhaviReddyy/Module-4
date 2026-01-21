const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../utils/fileHandler");

router.post("/", (req, res) => {
    const { name, price, stock } = req.body;
    const db = readDB();

    const newProduct = {
        id: db.products.length + 1,
        name,
        price,
        stock
    };

    db.products.push(newProduct);
    writeDB(db);

    res.status(201).json(newProduct);
});

router.get("/", (req, res) => {
    const db = readDB();
    res.json(db.products);
});

module.exports = router;