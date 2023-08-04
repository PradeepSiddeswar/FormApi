const express = require ("express")
const dotenv = require("dotenv")
// const path = require("path")
const router = express.Router()
const cors = require('cors')

const http = require('http');

const ipAddress = '192.168.0.105';
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


app.get("/", (req, res) => {
    res.send("hello Form Api")
})

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ['GET', 'POST'],
//     allowedHeaders:['Content-Type', 'Authorization'],
//     credentials: true
// }));

// const whitelist = ['http://localhost:3000', 'http://localhost:3000/form']
// const corsOptions = {
//     origin: function (origin, callback) {
//        if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//        }else {
//         callback(new Error('Not allowed CORS'))
//        }
//     }
// }



// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Replace with the allowed origin(s)
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// ...rest of your server code

//  Replace this with the IP address you want to listen on
const port = 5000; // Replace this with the desired port number

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is your Node.js server!\n');
});

server.listen(port, ipAddress, () => {
  console.log(`Server running at http://${ipAddress}:${port}/`);
});



app.options('/form', cors()); // Handle preflight requests for a specific route
app.use(express.json())
app.use('/form', formRoute)