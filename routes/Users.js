const express = require('express');
const users = express.Router();
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

users.use(cors());

process.env.SECRET_KEY = 'secret';

users.get('/', function (req, res) {
  res.send('Users page');
})

 users.post('/register', (req,res) => {
	console.log("I am in the register");
	const today = new Date();
	const userData = {
		firstName : req.body.firstName,
		lastName : req.body.lastName,
		email : req.body.email,
		password : req.body.password,
		created: today
	}
	User.findOne({
		email: req.body.email
	}).then(user => {
		if (!user) {
			console.log("No users matched");
			bcrypt.hash(req.body.password, 10, (err, hash) => {
				userData.password = hash
				User.create(userData)
					.then(user => {
						res.json({ status: user.email + ' :registered'});
					})
					.catch(err => {
						res.send('error:' + err);
					})
			})
		} else {
			res.json({ error: 'user already exists'});
		}
	})
	.catch(err => {
		res.send('error:' + err)
	})
		
});

users.post('/login', (req,res) => {
	User.findOne({
		email: req.body.email
	}).then(user => {
		if(user){
			if(bcrypt.compareSync(req.body.password, user.password)){
				const payload = {
					_id: user._id,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email
				}
				let token = jwt.sign(payload, process.env.SECRET_KEY, {
					expiresIn: 1440
				})
				res.send(token);
			}else {
				res.json({ error: "User does not exist"});
			}
		}else {
			res.json({ error: "User does not exists"});
		}
	})
	.catch(err => {
		res.send( 'error: ' + err);
	});
});

module.exports = users;


