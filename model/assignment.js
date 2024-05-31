// Import des modules nécessaires
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = require('mongodb').ObjectID;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

// Définition du schéma avec les nouvelles propriétés
let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    auteur: String,
    matiere: String,
    note: Number,
    remarques: String,
    prof: String,
    matiereImage: String,
    profPhoto: String
});

// Ajout de la pagination au schéma
AssignmentSchema.plugin(aggregatePaginate);

// Export du modèle Mongoose avec le schéma mis à jour
module.exports = mongoose.model('assignments', AssignmentSchema);
