import { model, Schema } from "mongoose";

const userSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            minLength: [3, 'Min 3 chars'],
            maxLength: [10, 'Max 10 chars'],
            select: false
        }
});

const User = model('user', userSchema);

export default User;