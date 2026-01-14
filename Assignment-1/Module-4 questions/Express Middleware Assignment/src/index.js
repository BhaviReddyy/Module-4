import express from "express";
import todoRouter from "./routes/todos.routes.js";
import loggerMiddleware from "./middleware/logger.middleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// App-level middleware
app.use(loggerMiddleware);

// Todo Router
app.use("/todos", todoRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});