const Router = require('express').Router();
const express = require('express')
const request = require('request')
const path = require('path')

const {
    ServerError
} = require('./errors');

const tmdbApiKey = "68ce5d35cd89de62e1fc171bbcaa753a"

const optionsTrending = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    qs: {
        api_key: tmdbApiKey,
        language: undefined
    }
}

const optionsTopRatedRecommended = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    qs: {
        api_key: tmdbApiKey,
        region: 'gb',
        language: 'en'
    }
}

const optionsMovieDetails = {
    method: 'GET',
    url: undefined,
    qs: {
        api_key: tmdbApiKey,
        append_to_response: 'videos,credits',
        language: 'en'
    }
}

const optionsMovieAutocomplete = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    qs: {
        api_key: tmdbApiKey,
        query: undefined,
        language: 'en'
    }
}

let parsedResult

tmdbApiKey
    ? console.log('TMDb api key is found')
    : console.log('TMDb api key is NOT found among environment variables!')

async function apiCall(options) {
    // (I.) promise to return the parsedResult for processing
    function tmdbRequest() {
        return new Promise(function (resolve, reject) {
            request(options, function (error, response, body) {
                try {
                    resolve(JSON.parse(body))
                } catch (e) {
                    reject(e)
                }
            })
        })
    }

    // (II.)
    try {
        parsedResult = await tmdbRequest()
    } catch (e) {
        console.error(e)
    }
    return parsedResult
}


Router.get('/movies/trending', async (req, res) => {
    res.json(await apiCall(optionsTrending))
    console.log(`/api/movies/trending endpoint has been called!`)

});

Router.get('/movies/topRatedRecommended', async (req, res) => {
    res.status(200).json(await apiCall(optionsTopRatedRecommended))

    res.status(404).json('not found')
    res.status(500).json('Internal Server Error :(')
    console.log(`/api/movies/topRatedRecommended endpoint has been called!`)
});


module.exports = Router;