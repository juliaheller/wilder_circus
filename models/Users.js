const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: String,
        lastName: String,
        email: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('user', userSchema);
