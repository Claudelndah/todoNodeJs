// Création du serveur web
const app = require('./app');
const db = require('./config/db');
const userModel = require('./models/user.model')

// Définition du port d'écoute de notre serveur.
const port = 3000;

//création d'une requête get 
app.get('/', (req,res)=>{
    res.send("Hello world.....!!!!!");
});

//écoute du port
app.listen(port, ()=>{
    console.log('écoute du serveur sur le port http://localhost:3000');
});