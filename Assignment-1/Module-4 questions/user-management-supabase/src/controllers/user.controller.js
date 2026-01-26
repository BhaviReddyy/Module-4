import bcrypt from 'bcryptjs';
import { supabase } from '../config/supabase.js';

export const createUser = async(req, res) => {
    try {
        const { name, email, password, age, role } = req.body;

        // Check duplicate email
        const { data: existingUser } = await supabase
            .from('users')
            .select('id')
            .eq('email', email)
            .single();

        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const { data, error } = await supabase.from('users').insert([{
            name,
            email,
            password: hashedPassword,
            age,
            role,
        }, ]);

        if (error) throw error;

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getUsers = async(req, res) => {
    const { data, error } = await supabase.from('users').select('*');

    if (error) return res.status(500).json({ error: error.message });

    res.json(data);
};

export const getUserById = async(req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

    if (!data) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(data);
};

export const updateUser = async(req, res) => {
    const { id } = req.params;

    const { error } = await supabase
        .from('users')
        .update(req.body)
        .eq('id', id);

    if (error) return res.status(500).json({ error: error.message });

    res.json({ message: 'User updated successfully' });
};

export const deleteUser = async(req, res) => {
    const { id } = req.params;

    const { error } = await supabase.from('users').delete().eq('id', id);

    if (error) return res.status(500).json({ error: error.message });

    res.json({ message: 'User deleted successfully' });
};