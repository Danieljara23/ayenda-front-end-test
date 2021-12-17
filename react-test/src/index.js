import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import MovieItem from "./components/MovieItem";
import {useGetMovies} from "./useGetMovies";

function App() {
    const {
        movies,
        setMovies
    } = useGetMovies()
    return (

        <>
            {movies}
            <Header>
                <Search/>
            </Header>
            <MovieList>
                {movies.map(() => <MovieItem/>)}
            </MovieList>
        </>
    )
}

export default App
