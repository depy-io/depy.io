var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template_home = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
  , template_about = require('jade').compileFile(__dirname + '/source/templates/about.jade')
  , port = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = template_home({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/about', function (req, res, next) {
  try {
	var html = template_about({ title: 'About' })
	res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(port, function () {
	  console.log('Listening on http://localhost:' + port)
})