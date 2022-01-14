const Router = require('express').Router();

const MoviesRoute = require('./movies.js');
const UsersRoute = require('./users.js');


Router.use('/', MoviesRoute);
Router.use('/', UsersRoute);


module.exports = Router;
