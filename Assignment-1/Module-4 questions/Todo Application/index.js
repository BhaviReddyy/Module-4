import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/todos", todoRoutes);

// Global Error Handler (Optional but Recommended)
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});