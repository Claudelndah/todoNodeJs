const mongoose = require('mongoose');

//connection à la base de données 
const connection = mongoose.createConnection("mongodb://localhost:27017/NewDb").on('open', ()=>{
    console.log("connected");
}).on('error', ()=>{
    console.log("connection error");
});

module.exports = connection