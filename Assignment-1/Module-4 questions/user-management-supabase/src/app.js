import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);