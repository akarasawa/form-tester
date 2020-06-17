//https://api.netlify.com/build_hooks/5ee2af99d71752cdffc5b84c
var express = require("express");
//stupid cors
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
const port = process.env.port || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.options("/rc-subscribe", cors());

app.get("/", function (req, res) {
    res.sendFile("index.html");
});

app.post("/rc-subscribe", function (req, res) {
    setTimeout(function () {
        console.log(req.body);
    }, 9000);
});
