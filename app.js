const express = require('express')
const session = require('express-session')
const {engine} = require('express-handlebars')
const methodOverride = require('method-override')
const UsePassport = require('./config/passport')
const routes = require('./routes')


const app = express()
const PORT = 3000

app.engine('hbs', engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')
app.use(session({
  secret: "TTT",
  resave: false,
  saveUninitialized: true
}))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

UsePassport(app)

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  next()

})



app.use(routes)

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})