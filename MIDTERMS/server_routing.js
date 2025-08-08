var express = require("express");
var app = express();

// This responds with "Hello World" on the homepage
app.get("/", function(req, res) {
    console.log("There is GET request for the homepage!");
    res.send("Here is the GET Method!");
})

// This responds a POST request for the homepage
app.post("/", function(req, res) {
    console.log("There is GET request for the homepage!");
    res.send("Here is the GET Method!");
})

// This responds a GET request for the /list_user page
app.get("/list_user", function(req, res) {
    console.log("Got a GET request for /list_user");
    res.send("This is Page Listing");
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get("/ab*cd", function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send("Pattern Match Page");
})

// This responds a GET request for the /seowfie page
app.get("/seowfie", function(req, res) {
    console.log("Got a GET request for /seowfie");
    res.send("Get to know me!<br><br>Name: Sofia Anne T. Sarmiento<br>Github User: seowfie<br>Section: WD-301<br>Course:BS Information Technology - Web Development<br>Age: 20<br>Short Description: I live in Angeles City, with one kid (orange persian cat).");
})

var server = app.listen(4000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port);

});
