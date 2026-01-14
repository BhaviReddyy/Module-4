import express from "express";
import userRouter from "./routes/users.routes.js";

const app = express();
const PORT = 3000;

app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});