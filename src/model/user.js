const {Schema, model} = require ("mongoose");
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20,
    },
title: {
    type: String,
   
    minlength: 3,
    maxlength: 40,
},

description: {
    type: String,
    
    minlength: 5,
    maxlength: 70,
},


},

{timestamps: true});
const userModel = model("users", userSchema);

module.exports = userModel;