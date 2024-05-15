const express = require("express")
const mongoose = require("mongoose")
const app = express()
const dotenv = require("dotenv").config()
const URI = process.env.URI

mongoose.connect(URI)
.then(()=>{
    console.log("connected")
    app.get("/", (req,res) =>{
        res.send("online")
    })
})
app.listen(4060, () => {
    console.log("Runs")
})