'use strict';
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const open = require("open");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const registration = require('./authentication/Registration');
const login = require('./authentication/Login');
const userData = require('./authentication/User');

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// To parse cookies from the HTTP Request
app.use(cookieParser());

app.engine('hbs', exphbs({
    extname: '.hbs'
}));

// Require employee routes
const citiesRoutes = require('./routes/cities.routes');

// using as middleware
app.use('/api/v1/cities', citiesRoutes);

app.set('port', process.env.PORT || 8000);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');
app.set('view engine', 'hbs');
app.set('views', 'docs/views');

app.get('/', function (req,res){
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('registration');
});

app.post('/register', (req, res) => {
    registration.register(res, req);
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    login.login(res,req);
});

app.use((req, res, next) => {
    // Get auth token from the cookies
    const authToken = req.cookies['AuthToken'];

    // Inject the user to the request
    req.user = userData.authTokens[authToken];

    next();
});

app.get('/protected', userData.requireAuth, (req, res) => {
    res.render('protected');
});

app.use(express.static('docs'));

app.listen(app.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
    open("http://localhost:8000");
});