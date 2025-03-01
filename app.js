const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const exphbs = require('express-handlebars')

//socket
const cors = require('cors')
const methodOverride = require('method-override')


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const port = process.env.PORT || 3000
const helpers = require('./_helpers')

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(cors())
app.use(express.urlencoded({ extended: true })) //用來解析表單
app.use(express.json()) //用來解析json
app.use('/upload', express.static(__dirname + '/upload'))

app.use((req, res, next) => {
  res.locals.user = helpers.getUser(req)
  return next()
})

require('./routes')(app)
require('./config/socket').io(http)

app.use((err, req, res, next) => {
  return res.status(500).json({ Error: String(err) })
})
//socket
http.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app

