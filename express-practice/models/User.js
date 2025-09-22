const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userId : {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,
        enum: ["Admin", "Member", "Guest"],
        default: "Guest",
    }
});

module.exports = mongoose.model("User",userSchema);