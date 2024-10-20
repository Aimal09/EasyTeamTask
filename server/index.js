import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Employee from './models/employeeModel.js';
import bcrypt from 'bcryptjs';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const getSecret = () => {
    const jwtSecret = fs.readFileSync('jwtRS256.key', 'utf8');
    process.env.JWT_SECRET = jwtSecret.trim()
}
getSecret();

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const employee = await Employee.findOne({ employeeId: email });
        if (!employee) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, employee.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const currentEmployee = employee.toObject();
        currentEmployee.employeeId = employee.toObject()._id;

        const token = jwt.sign(currentEmployee, process.env.JWT_SECRET, { algorithm: 'RS256' });
        console.log("--LOGIN--")

        const employees = await Employee.find();
        const formatedEmployee = employees.map(em => ({
            id: em._id,
            employeeId: em._id,
            name: em.name,
            picture: em.picture,
            payrollId: em.payrollId,
            deleted_at: em.deleted_at
        }))
        
        res.json({ token, employee: currentEmployee,employees:formatedEmployee });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


app.get('/api/getAllEmployees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }
});


app.post('/api/addEmployee', async (req, res) => {
    try {
        const {
            employeeId,
            name,
            password,
            locationId,
            organizationId,
            payrollId,
            employeePayrollId,
            accessRole,
            role,
            picture,
            deleted_at
        } = req.body;
        console.log(password)

        const hashedPassword = await bcrypt.hash(password, 10);

        const newEmployee = new Employee({
            employeeId,
            name,
            password: hashedPassword,
            locationId,
            organizationId,
            payrollId,
            partnerId: process.env.PARTNER_ID,
            employeePayrollId,
            accessRole,
            role,
            picture,
            deleted_at
        });

        await newEmployee.save();
        res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
    } catch (error) {
        res.status(400).json({ message: 'Error adding employee', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});