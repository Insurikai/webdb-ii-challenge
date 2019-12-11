const express = require('express')
const server = express();
const db = require('./data/db')
server.use(express.json())

server.get('/', (req, res) => {
  db('cars').then(tble =>{
    res.status(200).send(tble);
  })
})
server.get('/:id', (req, res) => {
  db('cars').where({id: req.params.id}).then(car =>{
    res.status(200).send(car);
  })
})
server.post('/', (req, res) => {
  db('cars').insert(req.body).then(id => {
    res.status(200).send(id);
  })
})

server.listen(8000, () => {
  console.log(`Listening on port 8000...`);
});