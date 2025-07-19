const express =require("express")
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./Routes/userRoute");
const db = require("./config/db");
const cors=require("cors");
const port = process.env.PORT || 8080;

require("dotenv").config();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);


app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});
