const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// We need a way to parse the formData sent in post. So we install body-parser

app.get("/", function (req, resp){
	// resp.send("<h1>Hello World! I am the Calculator</h1>");
	// console.log(__dirname);
	// resp.sendFile("index.html"); // Gives error as the file name is not absolute.
	resp.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, resp) {
	// console.log(req.body);
	let num1 = Number(req.body.num1);
	let num2 = Number(req.body.num2);
	let result = num1 + num2;

	resp.send("The result of the calculation is " + result);
})

app.listen(4500, function(){
	console.log("Calculator running on port 4500");
})
