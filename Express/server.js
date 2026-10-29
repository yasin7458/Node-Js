const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(" Welcome To Home Page !!")
})

app.get("/about", (req, res) => {
    res.send(" Welcome To About Page !!")
})

app.get("/service", (req, res) => {
    res.send(" Welcome To Service Page !!")
})

app.get("/blog", (req, res) => {
    res.send(" Welcome To Blog Page !!")
})

app.get("/contact", (req, res) => {
    res.send(" Welcome To Contact Page !!")
})

app.listen(3000);

