const Router = require('express').Router();
const express = require('express')
const request = require('request')
const path = require('path')


const {
    getSecret
  } = require('docker-secret');

const {
    ServerError
} = require('./errors');

const tmdbApiKey = process.env.NODE_ENV === 'development' ? process.env.API : getSecret(process.env.API)

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


Router.get('/trending', async (req, res) => {
    console.log(`/api/movies/trending endpoint has been called!                   ${req}`)
    res.json(await apiCall(optionsTrending))
    console.log(`/api/movies/trending endpoint has been called!`)

});

Router.get('/topRatedRecommended', async (req, res) => {
    res.json(await apiCall(optionsTopRatedRecommended))

    
    console.log(`/api/movies/topRatedRecommended endpoint has been called!`)
});

Router.get('/movieDetails/:tmdbId', async (req, res) => {
    const id = req.params.tmdbId
    console.log(id)
    optionsMovieDetails.url = `https://api.themoviedb.org/3/movie/${id}`
    res.json(await apiCall(optionsMovieDetails))
    console.log(`/api/movies/movieDetails/:id endpoint has been called!`)

});

Router.get('/movieAutocomplete', async (req, res) => {
    const query = req.query.q
    optionsMovieAutocomplete.qs.query = query
    res.json(await apiCall(optionsMovieAutocomplete))
    console.log(`/api/movies/movieAutocomplete?q=${query} endpoint has been called!`)
  })

module.exports = Router;
