const express = require('express')
const session = require('express-session')
const {engine} = require('express-handlebars')
const methodOverride = require('method-override')

const app = express()
const PORT = 3000

app.engine('hbs', engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})