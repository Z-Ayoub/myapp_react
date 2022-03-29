import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const titleRef = useRef('');
  const directorRef = useRef('');
  const producerRef = useRef('');
  const releaseDateRef = useRef('');

    function submitHandler(event) {
     event.preventDefault();
    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      director: directorRef.current.value,
      producer: producerRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} placeholder="Entre title's Movie...... " required/>
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Director</label>
        <textarea type='text' id='director' ref={directorRef} placeholder="Entre Director's Movie...... " required></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Producer</label>
        <textarea type='text' id='producer' ref={producerRef} placeholder="Entre Producer's Movie...... " required></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} placeholder="Entre Relealse Date's Movie...... " required/>
      </div>
      <button type='submit' >Add Movie</button>
    </form>
  );
}

export default AddMovie;