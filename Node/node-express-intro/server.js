const express = require("express");

const app = express();

app.get("/", function (request, response) {
//	console.log(request);
//	console.log(response);
	response.send("Hello");
})

// Defining Routes for the localhost. Get method is used to set routes and associate them with functions.
app.get("/contact", function(req, resp){
	resp.send("<h1>Contact me at: pranay.bajaj92@gmail.com</h1>");
})

app.get("/about", function (req,resp) {
	resp.send("I am Pranay Bajaj. I am a <b><i>Software Engineer</i></b>");
})

// We need to restart server for every change. So we use nodemon. npm install -g nodemon.. it monitors the server
app.listen(3000, function(){
	console.log("Server started on port 3000");
});
