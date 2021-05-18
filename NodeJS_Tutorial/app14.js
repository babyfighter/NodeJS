const express = require('express');
const { dirname } = require('path');
const path = require('path')
const app = express()

app.unsubscribe('/public', express.static(path.join(__dirname,'static')))
app.set('view engine', 'ejs')

const people = require('./routes/people');

app.use('/people',people);

app.listen(3000)