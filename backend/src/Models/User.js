import {model, Schema} from 'mongoose';

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    tickets: {
        type: Array,
        required: false,
        default: []
    }
})

const User = model('user', schema);

export default User;