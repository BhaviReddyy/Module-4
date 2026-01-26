import { body } from 'express-validator';

export const createUserValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),
    body('age')
    .optional()
    .isInt({ min: 18 })
    .withMessage('Age must be 18 or above'),
];