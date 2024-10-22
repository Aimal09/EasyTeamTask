import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    locationId: {
        type: String,
        required: true,
    },
    organizationId: {
        type: String,
        required: true,
    },
    partnerId: {
        type: String,
        required: true,
    },
    payrollId: {
        type: String,
        required: true,
    },
    employeePayrollId: {
        type: String,
        required: true,
    },
    accessRole: {
        name: {
            type: String,
            required: true,
        },
        permissions: {
            type: [String],
            required: true,
        },
    },
    role: {
        name: {
            type: String,
            required: true,
        }
    },
    picture: {
        type: String,
        required: true,
    },
    deleted_at: {
        type: String,
        required: false,
    }
});

const Employee = mongoose.model('Employees', employeeSchema);

export default Employee;