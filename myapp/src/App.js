import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Test from './components/Test';

const App = () => {

 /* Déclare une nouvelle variable d'état, que l'on va appeler « myVar » ,
  Nous allons créer un état appelé «thème» à l'aide de useState.
  useState renverra la valeur actuelle du "myVar" et une fonction pour mettre à jour le "myVar".
 */
const [myVar, setMyVar] = useState('Hello World');

const onClickHandler = () => {

  // on peut utiliser cette méthode
  // setMyVar('Hello World updated');

  // ou bien cette méthode pour mettre à jour << myVar >> lorsque l’utilisateur clique sur le bouton
 setMyVar((prevState) => {
   return prevState + 'updated';
 })
}

/* envoyer des données d'un composant enfant à son parent en tant 
que prop
*/
const  childToParentUpdater = (data) => {
  console.log('childToParentUpdater',data);
}

return(
 <div className="App">
  <button onClick={onClickHandler}>Click Me</button>
	{myVar}
  <Test myProps={myVar} updater={childToParentUpdater}/>
  </div>
)};

export default App;
