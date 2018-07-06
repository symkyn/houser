const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

// const session = require('express-session');
require('dotenv').config({
    path: __dirname + '../../.env',
});

let db;

massive(process.env.DB_CONNECTION_STRING)
    .then(dbInstance => {
        console.log('DB Connected');
        db = dbInstance;
    })
    .catch(err => console.warn(err))

const app = express();
app.use( bodyParser.json() );

// app.use(session ({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }));

const port = process.env.PORT || 4000;
app.listen( port, () => console.log(`Server listening on port ${port}`));