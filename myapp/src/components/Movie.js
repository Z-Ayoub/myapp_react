import React from 'react'
import toto from './Movie.module.css'

const Movie = (props) => {
    return (
        <div className={toto.divv}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.director}</p>
            <p>{props.producer}</p>
            <p>{props.release_date}</p>
        </div>
    )
}

export default Movie;