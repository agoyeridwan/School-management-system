const mongoose = require("mongoose")
const express = require("express")
const app = express();
app.use(express.json({ limit: "10kb" }));
console.log("Server has started")
console.log("This guy is good")
let db = "mongodb://localhost:27017/practice"
try {
    mongoose.connect(db);
    console.log("Database successfully connected") 
} catch (error) {
    console.log("Error while connecting to DB")
}
