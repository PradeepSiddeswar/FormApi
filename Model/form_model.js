const mongoose = require("mongoose")
const schema = mongoose.Schema

const formSchema = new schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true,
        lowercase:true,
    },
    mobile: {
        type: Number,
        required:true
    },
    message: {
        type: String,
        required: true,
    }

    
})

const formDB = mongoose.model("form", formSchema)
module.exports = formDB