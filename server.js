const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

//connect to Mongoose



mongoose.connect(process.env.ATLAS_URI)

//require Route

app.use('/', require('./server/routes/bugRoutes') )

app.listen(3001, function () {
    console.log("express server is running on port 3001")
})