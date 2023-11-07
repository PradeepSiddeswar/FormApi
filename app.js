const express = require ("express")
const dotenv = require("dotenv")
// const path = require("path")
const router = express.Router()
const cors = require('cors')

// const http = require('http');

// const ipAddress = '192.168.0.105';
const app = express()
const corsOption = {
  origin: ['http://localhost:5000'],
  methods:['GET', 'POST', 'PUT', 'DELETE']
}

// const formPath =path.resolve(__dirname,'..','form');
// console.log('Form Path:', formPath);
const mongoose = require("mongoose");
mongoose.pluralize(null)

const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true}));
app.use(cors(corsOption));
app.use(cors('*'));

  



dotenv.config({ path: '.env'})
const PORT = process.env.PORT || 5000
console.log("Server Started", PORT)

mongoose.connect(process.env.MONGO_URI, {

})
.then(() => console.log(`Connected To Database`))
.then (() => {
    app.listen(PORT);
})
.catch((error) => console.log(error));


const formRoute = require('./Routes/form_router')
const RequirementFromRoute = require('./Routes/RequirementForm_Router')


app.get("/", (req, res) => {
    res.send("hello Form Api")
})


app.options('/form', cors()); // Handle preflight requests for a specific route
app.use(express.json())

app.use(express.static("upload"))
app.use('/form', formRoute)
app.use('/requirement-form',RequirementFromRoute)