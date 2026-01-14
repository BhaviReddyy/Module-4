import express from "express";
import fs from "fs";
import upload from "../middleware/upload.middleware.js";
import uniqueEmail from "../middleware/uniqueEmail.middleware.js";
import cloudinary from "../config/cloudinary.config.js";

const router = express.Router();
const DB_PATH = "./src/db.json";

const readDB = () =>
    JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

const writeDB = (data) =>
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

router.post(
    "/signup",
    upload.single("profile"),
    uniqueEmail,
    async(req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({
                    error: "Profile image is required",
                });
            }

            const { name, email, password } = req.body;

            const uploadResult = await cloudinary.uploader.upload(
                `data:${req.file.mimetype};base64,${req.file.buffer.toString(
          "base64"
        )}`, { folder: "profiles" }
            );

            const db = readDB();

            const newUser = {
                id: Date.now(),
                name,
                email,
                password,
                profilePic: uploadResult.secure_url,
            };

            db.users.push(newUser);
            writeDB(db);

            res.status(201).json({
                message: "User registered successfully",
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    profilePic: newUser.profilePic,
                },
            });
        } catch (error) {
            res.status(500).json({
                error: "Signup failed",
            });
        }
    }
);

export default router;