// Import du package express
const express = require('express');
// Import de body-parser qui nous permettra d'analyser le corps de nos requête et d'y prendre les informations
// dont nous avons besoins
const body_parser = require('body-parser');
const userRouter = require('./routers/user.route');

const app = express();

app.use(body_parser.json());
app.use('/', userRouter)


// Permet d'utiliser notre module expres dans n'importe quel endroit du projer
module.exports = app;

