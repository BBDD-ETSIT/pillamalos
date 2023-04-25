const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const MensajesController = require('./controllers/mensaje');

const app = express();
const crypto = require("text-cryptography");
const vig = new crypto.Vigenere("keyword");

const mongoose = require('mongoose');
(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/twitter',{ useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connected to Mongo!')
  } catch (err) {
    console.log('Error connecting to Database: ' + err)
  }
})()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',async (req, res, next) => {
  let tweets = await MensajesController.filterMensajes().catch(e => next(e));
  if(tweets.length===0){
    console.log("LA FUNCION FILTERMENSAJES NO HA DEVUELTO MENSAJES, COMPRUEBE DICHA FUNCIÓN");
  } else {
    console.log("LA FUNCION FILTERMENSAJES HA DEVUELTO " + tweets.length + " MENSAJES. LOS PROCESAMOS.");
  }
  res.render('index', {tweets: tweets});
});

app.post('/process', (req, res, next) => {
  console.log("El SERVIDOR RECIBE UNA LLAMADA A PROCESAR LOS MENSAJES RECUPERADOS")
  console.log("EL SERVIDOR RECIBE COMO USERNAME: " + req.body.username);
  var code = "";
  //let en = vig.encrypt("Username");
  // let de = vig.decrypt(en)
  //console.log(en)
  // console.log(de)
  if(vig.encrypt(req.body.username) === "Msakrilvs") {
    console.log("EL USERNAME ES CORRECTO Y TODO ESTÁ OK. PROCEDEMOS A PROCESAR CON IA");
    code = vig.decrypt("Wepec Crzix Liclns");
  }
	res.render('code', {code: code});
});

// handle 404 errors
app.use(function(req, res){
    res.status(404).render('notFound');
});

app.use(function(err, req, res, next) {
	  console.log(err);
    res.status(500).render('error', { error: err});
});

app.listen(8001, function() {
    console.log('App listening on port 8001');
});
