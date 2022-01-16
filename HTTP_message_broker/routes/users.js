const Router = require("express").Router();

const { sendRequest } = require("../http-client");



Router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    res.set('Access-Control-Allow-Origin', '*');
    const postMovieLogin = {
        url: `http://${process.env.HOST}:5002/${process.env.USER_MANAGEMENT_PROCESSING_ROUTE}/login`,
        method: "POST",
        data: {
            email,
            password
        },
    };

    const loginResponse = await sendRequest(postMovieLogin);

    res.json(loginResponse);
});


Router.post("/register", async (req, res) => {
    const { first_name, last_name, email, password, phone } = req.body;
    res.set('Access-Control-Allow-Origin', '*');
    const postBookRequest = {
        url: `http://${process.env.HOST}:5002/${process.env.USER_MANAGEMENT_PROCESSING_ROUTE}/register`,
        method: "POST",
        data: {
            first_name,
            last_name,
            email,
            password,
            phone
        },
    };

    const registerResponse = await sendRequest(postBookRequest);

    res.json(registerResponse);
});

module.exports = Router;
