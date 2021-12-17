import React from 'react';
import {useGetMovies} from "./useGetMovies";

/**
 * hook where the complete state is handled(events on template)
 * @returns {{
 * movies: [],
 * getMovies: getMovies,
 * setSearchValue: (value: (((prevState: string) => string) | string)) => void,
 * setMovies: (value: (((prevState: []) => []) | [])) => void,
 * loading: boolean,
 * error: boolean,
 * searchValue: string,
 * setSearchCharacters: (value: (((prevState: string) => string) | string)) => void,
 * }}
 */
const useMovies = () => {
    const [searchValue, setSearchValue] = React.useState('')
    const [searchCharacters, setSearchCharacters] = React.useState('')
    const {movies, setMovies, loading, error, get: fetchMovies} = useGetMovies()

    React.useEffect(() => {
        fetchMovies({characters: searchCharacters || null, titleStartsWith: searchValue || null})
    }, [searchValue, searchCharacters])


    return ({
        setSearchValue,
        searchValue,
        movies,
        setMovies,
        loading,
        error,
        setSearchCharacters
    });
}


export {useMovies};
