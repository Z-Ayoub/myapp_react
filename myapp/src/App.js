import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Test from './components/Test';
import Movie from './components/Movie';

const App = () => {

 /* Déclare une nouvelle variable d'état, que l'on va appeler « myVar » ,
  Nous allons créer un état appelé «thème» à l'aide de useState.
  useState renverra la valeur actuelle du "myVar" et une fonction pour mettre à jour le "myVar".
 */
const [myVar, setMyVar] = useState('Hello World');
const [movies, setMovies] = useState([]);


function fetchMoviesHandler() {
  fetch('https://swapi.dev/api/films/')
  .then(response => {
    console.log(response);
    return response.json()
  })
  .then(data => {
    console.log(data);
    setMovies(data.results);
  })
}

/*
useEffect permet aux fonctions composants de gérer des effets de bord.
*/
useEffect(() => {
  fetchMoviesHandler();
},[]);

const onClickHandler = () => {

  // on peut utiliser cette méthode
  // setMyVar('Hello World updated');

  // ou bien cette méthode pour mettre à jour << myVar >> lorsque l’utilisateur clique sur le bouton
 setMyVar((prevState) => {
   return prevState + ' updated';
 })
}

/* envoyer des données d'un composant enfant à son parent en tant 
que prop
*/
const  childToParentUpdater = (data) => {
  console.log('childToParentUpdater',data);
}

return (
  <div className="App">
    <button onClick={onClickHandler} className="error_btn">ClickMe</button> 
    {movies.map((movie,index) => {
      return <Movie
        key={index}
        title={movie.title}
        description={movie.description}
        director={movie.director}
        producer={movie.producer}
        release_date={movie.release_date}
      />
    }
  )}
  </div>
);
}
export default App;
