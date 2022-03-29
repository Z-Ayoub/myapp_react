import React from 'react'
import toto from './Movie.module.css'

const Movie = (props) => {
    return (
        <div className={toto.divv}>
            <h1 className={toto.title}>{props.title}</h1>
            <p className={toto.description}>{props.description}</p>
            <p className={toto.director}>{props.director}</p>
            <p className={toto.producer}>{props.producer}</p>
            <p className={toto.release_date}>{props.release_date}</p>
        </div>
    )
}

export default Movie;