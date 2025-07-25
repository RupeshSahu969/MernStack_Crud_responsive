const mongoose = require('mongoose');
require('dotenv').config();

const DB= mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});
module.exports = DB;

