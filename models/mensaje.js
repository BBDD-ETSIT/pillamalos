'use strict'
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const MensajeSchema = Schema({
    url: String,
    date: Date,
    content: String,
    renderedContent: String,
    id: Number,
    user: Object
}, { versionKey: false , strict: false });

module.exports = mongoose.model('Mensaje', MensajeSchema);
