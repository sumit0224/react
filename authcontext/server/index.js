require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());

//  mongodb connection function
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/react")
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}
connectToDB();

// create a user model

const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    }

})
const userModel = mongoose.model("user", userSchema)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("api running")
})

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET || "fallback_secret");
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // validation
        if (!name || !email || !password) return res.status(400).json({ message: "All fields required" });

        // Check if user exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({ name, email, password: hashedPassword });
        await newUser.save();

        // Generate token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "1h" });

        res.status(201).json({ message: "User created successfully", token, user: { id: newUser._id, name: newUser.name, email: newUser.email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) return res.status(400).json({ message: "All fields required" });

        // Check user
        const user = await userModel.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        // Verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: "Invalid email or password" });

        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "1h" });

        res.status(200).json({ token, message: "Logged in successfully", user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/profile", verifyToken, async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select("-password");
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log("server is running on 3000")
})