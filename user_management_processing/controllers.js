const Router = require('express').Router();
const express = require('express');

const {
    query
} = require('./data');


Router.post('/login', async (req, res) => {
    console.log(`/api/users/login endpoint has been called and will check if the user is in the database!`)

    const { email, password } = req.body
    console.log(email + "   " + password)
    try {
        const user = await query("SELECT * from users WHERE email = $1 and password = $2", [email, password])

        res.json(user)
    } catch (error) {
        res.status(500).json(error)
    }
    

});

Router.post('/register', async (req, res) => {
    console.log(`/api/users/register endpoint has been called and will register the user in the database!`)

    const { first_name, last_name, email, password, phone } = req.body
    try {
        const user = await query("INSERT INTO users (first_name, last_name, email, password, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [first_name, last_name, email, password, phone])

        res.json(user)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

module.exports = Router;
