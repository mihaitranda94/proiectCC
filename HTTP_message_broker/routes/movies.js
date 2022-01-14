const Router = require("express").Router();

const { sendRequest } = require("../http-client");

Router.get("/trending", async (req, res) => {
    console.info(`Forwarding request for get trending movies ...`);

    const getTrendingMovies = {
        url: 'http://localhost:5001/api/movies/trending',
    };
    console.log(process.env.MOVIE_PROCESSING_ROUTE)
    const trending = await sendRequest(getTrendingMovies);

    res.json(trending);
});

Router.get("/topRatedRecommended", async (req, res) => {
    console.info(`Forwarding request for getting top rated movie recommendations ...`);

    const getTopRated= {
        url: `http://127.0.0.1:5001/${process.env.MOVIE_PROCESSING_ROUTE}/topRatedRecommended`,
    };

    const topRatedResponse = await sendRequest(getTopRated);

    res.json(topRatedResponse);
});


Router.get("/movieDetails/:tmdbId", async (req, res) => {
    const  id  = req.params.tmdbId

    console.info(`Forwarding request for get movie details by id ${id} ...`);

    const getMovieDetailsTmdbIdRequest = {
        url: `http://localhost:5001/${process.env.MOVIE_PROCESSING_ROUTE}/movieDetails/${id}`,
    };
    console.error(getMovieDetailsTmdbIdRequest.url)
    const MovieDetails = await sendRequest(getMovieDetailsTmdbIdRequest);

    res.json(MovieDetails);
});


Router.get("/movieAutocomplete", async (req, res) => {
    console.info(`Forwarding request for getting top rated movie recommendations ...`);
    const query = req.query.q

    const getAutocomplete = {
        url: `http://localhost:5001/${process.env.MOVIE_PROCESSING_ROUTE}/movieAutocomplete?q=${query}`,
    };

    const autocompleteResponse = await sendRequest(getAutocomplete);

    res.json(autocompleteResponse);
});

module.exports = Router;
