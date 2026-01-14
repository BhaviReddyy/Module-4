import {
    getAllTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo,
} from "../models/todo.model.js";

export const fetchTodos = (req, res, next) => {
    try {
        const todos = getAllTodos();
        res.status(200).json(todos);
    } catch (err) {
        next(err);
    }
};

export const fetchTodo = (req, res, next) => {
    try {
        const todo = getTodoById(Number(req.params.todoId));
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json(todo);
    } catch (err) {
        next(err);
    }
};

export const createTodo = (req, res, next) => {
    try {
        if (!req.body.title) {
            return res.status(400).json({ error: "Title is required" });
        }
        const todo = addTodo(req.body.title);
        res.status(201).json(todo);
    } catch (err) {
        next(err);
    }
};

export const editTodo = (req, res, next) => {
    try {
        const updated = updateTodo(
            Number(req.params.todoId),
            req.body
        );
        if (!updated) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

export const removeTodo = (req, res, next) => {
    try {
        const deleted = deleteTodo(Number(req.params.todoId));
        if (!deleted) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted" });
    } catch (err) {
        next(err);
    }
};