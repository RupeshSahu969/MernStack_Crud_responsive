const User = require("../model/user");
const express = require("express");
const route = express.Router();

// GET all users
route.get("/", async (req, res) => {
    try {
        const result = await User.find();
        res.status(200).json({ message: "Get all data", result });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

// CREATE a new user
route.post("/create", async (req, res) => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const result = new User({ name, email, age });
        await result.save();

        res.status(201).json({ message: "Successfully Registered", result });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

// UPDATE user by ID
route.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        const result = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });

        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", result });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

// DELETE user by ID
route.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await User.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

module.exports = route;
