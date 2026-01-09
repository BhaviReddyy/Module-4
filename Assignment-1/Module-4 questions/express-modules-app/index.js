const express = require("express");
const os = require("os");
const dns = require("dns");
const readFileData = require("./read");

const app = express();
const PORT = 3000;

/* Test Route */
app.get("/test", (req, res) => {
    res.send("Test route is working!");
});

/* Read File Route */
app.get("/readfile", async(req, res) => {
    try {
        const data = await readFileData();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

/* System Details Route */
app.get("/systemdetails", (req, res) => {
    const totalMemoryGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
    const freeMemoryGB = (os.freemem() / (1024 ** 3)).toFixed(2);

    const systemDetails = {
        platform: os.platform(),
        totalMemory: `${totalMemoryGB} GB`,
        freeMemory: `${freeMemoryGB} GB`,
        cpuModel: os.cpus()[0].model,
        cpuCores: os.cpus().length // Bonus
    };

    res.json(systemDetails);
});

/* Get IP Route */
app.get("/getip", (req, res) => {
    dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
        if (err) {
            res.status(500).json({ error: "DNS lookup failed" });
        } else {
            res.json({
                hostname: "masaischool.com",
                addresses: addresses // IPv4 + IPv6 (Bonus)
            });
        }
    });
});

/* Start Server */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});