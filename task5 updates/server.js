const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/eblling')
 .then(()=>console.log('MongoDB Connected'))
 .catch(err=>console.log(err));


