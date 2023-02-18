const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require("./routes/users");
const authrouter = require("./routes/auth");
const postrouter = require("./routes/posts");

dotenv.config()

mongoose.connect(process.env.DATABASE, {useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,}, ()=>{
    console.log("Connected to Database")
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", router)
app.use("/api/auth", authrouter)
app.use("/api/posts", postrouter)

app.listen(4000, ()=>{
    console.log("Backend is running at 4000")
})