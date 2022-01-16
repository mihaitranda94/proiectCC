const Router = require("express").Router();

const { sendRequest } = require("../http-client");



Router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const postMovieLogin = {
        url: `http://${process.env.HOST}:4003/${process.env.USER_MANAGEMENT_PROCESSING_ROUTE}/login`,
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

    const postBookRequest = {
        url: `http://${process.env.HOST}:4003/${process.env.USER_MANAGEMENT_PROCESSING_ROUTE}/register`,
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
