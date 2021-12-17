import React from 'react';
import axios from 'axios'
import md5 from 'blueimp-md5'

const API_KEY = 'b265dd358f36c3ef4e5d2a44edb5d2d7'
const API_KEY_PRIVATE = 'a1cd6d6775ad1d3ec1d841eb5c849284c3d367a3'
const TS = 1;
const HASH = md5(`${TS}${API_KEY_PRIVATE}${API_KEY}`)
const API_URL = 'https://gateway.marvel.com/v1/public/comics'


/**
 * hook where the state of the movies is handled
 * @returns {{
 * movies: *[],
 * get: get,
 * setMovies: (value: (((prevState: *[]) => *[]) | *[])) => void,
 * error: boolean,
 * loading: boolean}}
 */
const useGetMovies = () => {
    const [movies, setMovies] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    React.useEffect(() => {
        get()
    }, [])

    /**
     *
     * @param {params} object have filters to send in the request
     */
    const get = async (params) => {
        setLoading(true)
        setError(false)
        try {
            const {data: {data: {results}}} = await axios.get(`${API_URL}`, {
                params: {
                    ts: TS,
                    apikey: API_KEY,
                    hash: HASH, ...params
                }
            })
            setMovies(results)
            setLoading(false)
        } catch (e) {
            setError(true)
            setLoading(false)
        }

    }
    return (
        {setMovies, movies, error, loading, get}
    );
}

export {useGetMovies};
