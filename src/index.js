const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Import express-handlebars
const { log } = require('console');

const route = require('./routes');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs'); // Set view engine to 'handlebars'
app.set('views', path.join(__dirname, 'resources/views'));

console.log(path.join(__dirname, 'resources/views'));

// Route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
