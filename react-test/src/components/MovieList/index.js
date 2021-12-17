import React from 'react';

const MovieList = (props) => {
    const renderFunc = props.children || props.render;
    return (
        <div className="columns is-centered">
            <section className="List-container is-relative is-variable  is-2 columns is-desktop  is-multiline">
                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.error && !props.loading && !props.movies.length >= 1) && props.onEmptySearchResults(props.searchValue)}
                {(!props.error && !props.loading) && props?.movies?.map(renderFunc)}

            </section>
        </div>

    );
}

export default MovieList;
