import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper functions
const readData = () => {
    const data = fs.readFileSync("db.json", "utf-8");
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

// GET all students
app.get("/students", (req, res) => {
    const data = readData();
    res.status(200).json(data.students);
});

// POST add new student
app.post("/students", (req, res) => {
    const { name, course, year } = req.body;

    if (!name || !course || !year) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const data = readData();
    const newStudent = {
        id: data.students.length + 1,
        name,
        course,
        year,
    };

    data.students.push(newStudent);
    writeData(data);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent,
    });
});

// PUT update student
app.put("/students", (req, res) => {
    const { id, name, course, year } = req.body;
    const data = readData();

    const studentIndex = data.students.findIndex(
        (student) => student.id === Number(id)
    );

    if (studentIndex === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    data.students[studentIndex] = {
        ...data.students[studentIndex],
        name: name || data.students[studentIndex].name,
        course: course || data.students[studentIndex].course,
        year: year || data.students[studentIndex].year,
    };

    writeData(data);

    res.status(200).json({
        message: "Student updated successfully",
        student: data.students[studentIndex],
    });
});

// DELETE student by id
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = readData();

    const studentExists = data.students.some(
        (student) => student.id === id
    );

    if (!studentExists) {
        return res.status(404).json({ message: "Student not found" });
    }

    data.students = data.students.filter(
        (student) => student.id !== id
    );

    writeData(data);

    res.status(200).json({ message: "Student deleted successfully" });
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});