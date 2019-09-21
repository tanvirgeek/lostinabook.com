var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

mongoose.connect('mongodb://127.0.0.1:27017/lostinabook', {useNewUrlParser : true });
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', (err) => console.log('Connection failed with - ',err));
	
var Users = require('./routes/Users.js')

console.log(Users);

app.use('/users', Users)

app.listen(PORT, ()=>{
	console.log("Server is running on port:" + PORT);
});
