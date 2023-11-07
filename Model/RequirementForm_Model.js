const mongoose = require('mongoose');

const requirementformSchema = new mongoose.Schema({
    Name : {
        type : String,
        required: true
    },
    PhoneNumber: {
        type : Number,
        required: true
    },
    SliderValue: {
        type: Number,
    },
    Amount: {
        type: Number, // this field is ot required
    } ,
    ChooseFile:{
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    },
});

const RequirementForm = mongoose.model('RequirementForm', requirementformSchema);
module.exports = RequirementForm