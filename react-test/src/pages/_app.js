import React from "react";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import MovieItem from "../components/MovieItem";
import '../scss/styles.scss'
import {useMovies} from "../useMovies";

function App() {
    const {error, loading, setSearchValue, searchValue, movies, setSearchCharacters} = useMovies()
    return (
        <section id="container-movies">
            <Header>
                <Search
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    setSearchCharacters={setSearchCharacters}
                    loading={loading}
                />
            </Header>
            <MovieList
                searchValue={searchValue}
                onEmptySearchResults={(searchValue) => (
                    <p>No hay resultado para {searchValue} </p>
                )}
                movies={movies}
                error={error}
                loading={loading}
                onError={() => (<p>Desespérate, hubo un error...</p>)}
                onLoading={() => (<p>Estamos cargando, no desesperes...</p>)}
                render={(movie) => (
                    <MovieItem key={movie?.id}
                               title={movie.title}
                               {...movie.thumbnail}
                    />)}
            />
        </section>
    )
}

export default App
