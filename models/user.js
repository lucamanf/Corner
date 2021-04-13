const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const userSchema = new Schema({
    email:{type:String, required:true},
    nome:{type:String, required:true,trim:true},
    materie:{type: [mongoose.Types.ObjectId],ref:"Subject"},
    cognome:{type:String, required:true,trim:true},
    password:{type:String, required:true,trim:true},
    ruolo:{type:String,required:true}
})

const User = mongoose.model('User',userSchema);

module.exports = User;