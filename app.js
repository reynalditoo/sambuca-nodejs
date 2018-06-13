const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors'); // so we can make requests on our front-end even if it's on a different port (sans cors, soumettre le formulaire de contact ne fonctionne pas)
const bodyParser = require('body-parser'); // body-parser extract the entire body portion of an incoming HTTP POST request (forms) stream and exposes it on req.body (ex: req.body.username)
const nodemailer = require('nodemailer');
const config = require('./config/database');

const app = express();

// Connect To Database
mongoose.connect(config.database); // => 'mongodb://localhost:27017/risorius'

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Body Parser Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

const contactForm = require('./routes/contact-form');
app.use('/contact-form', contactForm); // toutes les routes du fichier /routes/contact-form.js commenceront par /contact-form

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public'))); // désigne comme point d'entrée le dossier /public (crée après compilation (ng build)) où se trouvera l'index.html

// Pour que chaque route autre que celles déjà spécifiées soient redirigées vers l'index.html
// à n'activer qu'après un ng build quand le site est en production, causera des soucis en développement en localhost
/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});*/

const port = 3000; /*const port = process.env.PORT || 8080;*/

app.listen(port, () => {
	console.log('COUCOU Mr Serveur ' + port + ' !!!');
});


