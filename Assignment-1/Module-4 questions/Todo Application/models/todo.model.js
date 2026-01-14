import { readDB, writeDB } from "../utils/fileHandler.js";

export const getAllTodos = () => {
    const db = readDB();
    return db.todos;
};

export const getTodoById = (id) => {
    const db = readDB();
    return db.todos.find((todo) => todo.id === id);
};

export const addTodo = (title) => {
    const db = readDB();
    const newTodo = { id: Date.now(), title };
    db.todos.push(newTodo);
    writeDB(db);
    return newTodo;
};

export const updateTodo = (id, data) => {
    const db = readDB();
    const index = db.todos.findIndex((todo) => todo.id === id);
    if (index === -1) return null;

    db.todos[index] = {...db.todos[index], ...data };
    writeDB(db);
    return db.todos[index];
};

export const deleteTodo = (id) => {
    const db = readDB();
    const index = db.todos.findIndex((todo) => todo.id === id);
    if (index === -1) return false;

    db.todos.splice(index, 1);
    writeDB(db);
    return true;
};