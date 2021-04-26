'use strict';
const express = require('express');
const exphbs = require('express-handlebars');
require("dotenv").config();
const app = express();
const open = require("open");
const bodyParser = require('body-parser');
const { requiresAuth } = require('express-openid-connect');
var cors = require('cors')
app.use(cors());
app.use(express.static('docs'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Require employee routes
const citiesRoutes = require('./routes/cities.routes');

app.engine('hbs', exphbs({
    extname: '.hbs'
}));

// using as middleware
app.use('/api/v1/cities', citiesRoutes);

app.set('port', process.env.PORT || 8000);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');
app.set('view engine', 'hbs');
app.set('views', 'docs/views');


const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_CLIENT_SECRET,
    baseURL: 'http://localhost:8000',
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: 'https://djs93.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    if(req.oidc.isAuthenticated()){
        res.render('protected');
    }
    else{
        res.render('home');
    }
});

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.listen(app.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
    open("http://localhost:8000");
});