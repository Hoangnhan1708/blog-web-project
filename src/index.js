const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Import express-handlebars
const { log } = require('console');
const methodOverride = require('method-override');
const route = require('./routes');
const db = require('./config/db');

db.connect();

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));
// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs'); // Set view engine to 'handlebars'
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
