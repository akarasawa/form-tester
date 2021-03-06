//https://api.netlify.com/build_hooks/5ee2af99d71752cdffc5b84c
var express = require("express");
//stupid cors
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.options("/rc-subscribe", cors());

app.get("/", function (req, res) {
    res.sendFile("index.html", { root: __dirname });
});

app.get("/rc-subscribe", cors(), function (req, res) {
    res.status(200).write("you subscribed to something, yay!!!");
    res.end();
});

app.post("/rc-subscribe", cors(), function (req, res) {
    console.log("this is the subscribe form data");
    console.log(req.body);
    setTimeout(function () {
        console.log(req.body);

        if (req.body.firstName === "Auden") {
            res.status(500).json({ status: "No icecream!" }); //.send("Please eat your vegetables!");
        } else {
            res.status(200).json({ status: "Ok, you can has icecream." });
        }
        res.end();
    }, 2000);
});

app.listen(PORT);
