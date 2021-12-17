import React from 'react';

const MovieItem = (props) => {
    const url = `${props.path}.${props.extension}`
    return (
        <div className="column is-relative   is-one-fifth">
            <div className="content-item">
                <figure className="image box image is-3by4">
                    <img src={url} alt={props.title}/>
                </figure>
                <div className="">{props.title}</div>
            </div>

        </div>
    )
}


export default MovieItem;


