const Router = require('express').Router();

const MoviesRoute = require('./movies.js');
const UsersRoute = require('./users.js');


Router.use('/', MoviesRoute);
Router.use('/users', UsersRoute);


module.exports = Router;
