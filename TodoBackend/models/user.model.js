const mongoose = require('mongoose');
const db = require('../config/db');

// Création du schéma de l'utilisateur 
const { Schema } = mongoose

const userSchema = new Schema({
    email:{
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required :true,
    }
})

// Création du modèle dans la base de données

const UserModel = db.model('user', userSchema);

module.exports = UserModel;