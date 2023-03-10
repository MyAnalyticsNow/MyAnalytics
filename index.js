require("dotenv").config();
const express = require("express");
const path = require("path")
const app = express();

function rp(p) {
    return path.join(__dirname, p);
}

app.use(express.json())
app.use(express.static("static"))

app.get("/", (req, res) => {
    res.sendFile(rp("html/index.html"))
})

app.get("/api/myanalytics.js/auth/:id", (req, res) => {
    console.log(req.params.id)
    res.sendFile(rp("API/myanalytics.js"))
})

app.post("/api/add-view", (req, res) => {
    console.log(req.body)
})

const port = process.env.port;
app.listen(port, () => {
    console.log("\x1b[33mServer Running!")
    console.log("\x1b[31mThis is a development server.\n")
    console.log(`\x1b[33mRunning on:\x1b[0m\nhttp://localhost${port == 1024 ? ":1024" : ""}`)
})