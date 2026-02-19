const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})

const token = jwt.sign({ name: "Sumit" }, "secretKey")
console.log(token)