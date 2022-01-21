const express = require('express')
const session = require('express-session')
const {engine} = require('express-handlebars')
const methodOverride = require('method-override')
const db = require('./models')
const Todo = db.Todo
const User = db.User

const app = express()
const PORT = 3000

app.engine('hbs', engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/users/login', (req, res) => {
  res.render('login')
})

app.post('/users/login', (req, res) => {
  res.send('login')
})

app.get('/users/register', (req, res) => {
  res.render('register')
})

app.post('/users/register', (req, res) => {
  const {name, email, password, confirmPassword} = req.body
  User.create({name, email, password})
    .then(user => res.redirect('/'))
  
})

app.get('/users/logout', (req, res) => {
  res.send('logout')
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})