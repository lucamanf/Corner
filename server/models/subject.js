const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const subjectSchema = new Schema({
    materia:{type:String,required:true,trim:true},
    sede:{type:String,required:true,trim:true}
});

const Subject = mongoose.model('Subject',subjectSchema);

module.exports = Subject;