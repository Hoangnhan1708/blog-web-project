const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require("express-handlebars"); // Import express-handlebars
const { log } = require('console');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine("hbs", engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs'); // Set view engine to 'handlebars'
app.set('views', path.join(__dirname, "resources/views"))

console.log(path.join(__dirname, "resources/views"));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})