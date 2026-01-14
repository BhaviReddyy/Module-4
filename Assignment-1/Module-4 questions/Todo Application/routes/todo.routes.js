import express from "express";
import {
    fetchTodos,
    fetchTodo,
    createTodo,
    editTodo,
    removeTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", fetchTodos);
router.get("/:todoId", fetchTodo);
router.post("/add", createTodo);
router.put("/update/:todoId", editTodo);
router.delete("/delete/:todoId", removeTodo);

export default router;