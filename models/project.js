const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const projectSchema = new Schema({
    titolo:{type:String,required:true,maxLength: 60,trim:true},
    materia:{type:mongoose.ObjectId, required:true, ref: "Subject"},
    partecipanti:{type:[String],required:true},
    date:{type: String,required:true},
    descrizione:{type:String,required:true,maxLength:200},
    contenuto:{type:Object,required:true},
    image_src:{type:String,required:true},
    created_by:{type:mongoose.ObjectId,required:true, ref: "User"},
    created_at:{type : Date, default: Date.now}
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;