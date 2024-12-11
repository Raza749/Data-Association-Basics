const express = require("express");
const userModel = require("./models/user.models");
const postModel = require("./models/posts.models");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World From the server.");
});

//  Create the new user
app.get('/create', async (req, res) => {
    const user = await userModel.create({
        username: "raza",
        email: "raza@gmail.com",
        age: 20
    });
    res.send(user);
});


//  Create the post
app.get("/post/create", async (req, res) => {
    const post = await postModel.create({
        postData: "Creating the my first Post",
        user: "675944212ca1c03ea0d5dd38"
    });
    const user = await userModel.findOne({ _id: "675944212ca1c03ea0d5dd38" })
    user.posts.push(post._id);
    await user.save();
    res.send({ post, user });
});


app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
});
