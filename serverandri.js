
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
var cors = require('cors')
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');





 const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'test',
    database: 'faruk'
  }
});


app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World! This world is Your'))


app.post('/signin', (req, res) => {signin.handelSignin(req, res, db, bcrypt)})
app.post('/register', (req, res) => { register.handelRegister(req, res, db, bcrypt)});
app.get('/profile/:id', (req, res) => { profile.handelProfile(req, res, db)})


app.put('/image', (req, res) => {image.handelImage(req, res, db)})

app.listen(3000, () => console.log('Example app listening on port 3000!'));

