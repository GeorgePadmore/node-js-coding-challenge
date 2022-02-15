const express = require('express');
const compression = require('compression');
const cors = require('cors');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());



module.exports = app;
