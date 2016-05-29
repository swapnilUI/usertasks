var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var mongoose = require("mongoose");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

mongoose.connect(config.database,function(err){
	if(err){
		console.log(err);
	} else {
		console.log("Database connected");
	}
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan("dev"));

var api = require("./app/routes/api")(app, express,io);
app.use("/api", api);

app.get('*',function(req,res){
	res.sendFile(__dirname + '/public/app/views/index.html');
});


http.listen(config.port,function(err){
	if(err){
		console.log(err);
	}else{
		console.log("Server running on port 3000");
	}
});