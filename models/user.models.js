const mongoose = require("mongoose");


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/dataassociation");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        },
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;