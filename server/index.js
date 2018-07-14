const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require("cors");



require('dotenv').config({
    path: __dirname + '../../.env',
});

const app = express();

let db;

massive(process.env.DB_CONNECTION_STRING)
    .then(dbInstance => {
        console.log('DB Connected');
        db = dbInstance;
    })
    .catch(err => console.warn(err))

app.use( bodyParser.json() );
app.use(express.static(__dirname + '/../build'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((req, res, next) => {
    if (!db) {
        console.warn('Database not connected');
        return next({message: 'Internal Server Error'})
    }
    req.db = db;
   next();
});

app.get('/api/houseList', (req, res, next) => {
    // console.log(req.db);
    req.db.get()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => console.warn(err))
});

app.post('/api/newHouse', (req, res, next) => {
    const newHouse = req.body;
    req.db.Houses.insert(newHouse)
        .then(house => res.status(201).send(house))
        .catch(err => {
            console.warn(err); 
            next({message: 'internal server error' })
        })
})

app.delete('/api/delete/:id', (req, res, next) => {
    const { id } = req.params;
    req.db.Houses.destroy(+id)
        .then(property => res.status(200).send(property))
        .catch(err => {
            console.warn(err);
            next({message: 'internal server error'})
        })
})

app.use((err, req, res, next) => {
    res.status(500).send(err);
})


const port = process.env.PORT || 4000;
app.listen( port, () => console.log(`Server listening on port ${port}`));