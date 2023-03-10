require("dotenv").config();
const express = require("express");
const path = require("path")
const app = express();
const favicon = require("serve-favicon")

function rp(p) {
    return path.join(__dirname, p);
}

app.use(express.json())
app.use(express.static("static"))
app.use(favicon(__dirname + "/static/myanalytics2.png"))

app.get("/", (req, res) => {
    res.sendFile(rp("html/index.html"))
})

app.get("/api/myanalytics.js/auth/:id", (req, res) => {
    console.log(req.params.id)
    res.sendFile(rp("API/myanalytics.js"))
})

var siteViews = 0;
var currentViewing = 0;
app.post("/api/add-view", (req, res) => {
    currentViewing++;
    console.log(currentViewing)
})

app.post("/api/leave-site", (req, res) => {
    currentViewing--;
    console.log(currentViewing)
})

app.get("/dashboard", (req, res) => {
    res.sendFile(rp("html/dashboard.html"))
})

const port = process.env.port;
app.listen(port, () => {
    console.log("\x1b[33mServer Running!")
    console.log("\x1b[31mThis is a development server.\n")
    console.log(`\x1b[33mRunning on:\x1b[0m\nhttp://localhost${port == 1024 ? ":1024" : ""}`)
})