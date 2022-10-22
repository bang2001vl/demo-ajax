const express = require("express");
const { readFileSync } = require("fs");

const app = express();

app.get("/", (req, res, next)=>{
    res.sendFile(__dirname + "/routes/index.html");
});

app.get("/afterClick", (req, res, next)=>{
    res.sendFile(__dirname + "/routes/afterClick.html");
});

app.get("/ajax/afterClick", (req, res, next)=>{
    const xml = readFileSync(__dirname + "/routes/afterClick-ajax.xml")
    res.send(xml);
});

app.listen(8080, ()=>{
    console.log("Listening on port 8080");
});