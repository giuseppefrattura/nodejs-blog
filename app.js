require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

//Template engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs')


app.use('/',require('./server/routes/main'));

app.listen(PORT, ()=> {
    console.log(`server is up on port ${PORT}`)

})