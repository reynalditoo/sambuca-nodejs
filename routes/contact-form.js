const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('../config/database');
const FormMsg = require('../models/contact');


router.post('/contact', (req, res, next) => {
	let newFormMsg = new FormMsg({
		name: req.body.name,
		email: req.body.email,
		message: req.body.message
	});  

	var transporter = nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	        type: 'OAuth2',
	        user: 'reynald.doulle@gmail.com',
	        clientId: '196539065554-pcdq55mng9f40drtvnmcv0povfsrvqbm.apps.googleusercontent.com',
	        clientSecret: 'bfqtQ9RLD1zbTYTIb_nBkyXm',
	        refreshToken: '1/uNY3HjkIy6nB6fQGTYT98OzwN4YGyw8RaWBt2Ze6U3w'
	    }
	})

	var mailOptions = {
	    from: newFormMsg.email + '<' + newFormMsg.email + '>',
	    to: 'reynald.doulle@gmail.com',
	    subject: 'Nouveau message de Sambuca.fr',
	    text: newFormMsg.message
	}

	transporter.sendMail(mailOptions, function (err, res) {
	    if(err){
	        console.log('Message non envoyé :(');
	    } else {
	        console.log('Message envoyé de la part de' + newFormMsg.email + ' !');
	    }
	})
});

module.exports = router;