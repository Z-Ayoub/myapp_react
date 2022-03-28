import React from 'react'

const Movie = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.director}</p>
            <p>{props.producer}</p>
            <p>{props.release_date}</p>
        </div>
    )
}

export default Movie;