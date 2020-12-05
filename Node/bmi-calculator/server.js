const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, resp){
	resp.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, resp) {
	// let weight = Number(req.body.weight);
	let weight = parseFloat(req.body.weight);
	let height = parseFloat(req.body.height) / 100;

	console.log(height);
	console.log(weight);
	
	let bmi = weight / (height * height);

	resp.send("Your BMI is : " + bmi);
})

app.listen(3000, function(){
	console.log("BMI Calculator running on 3000!!");
})
