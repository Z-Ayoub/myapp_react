import logo from './logo.svg';
import './App.css';

const App = () => {
  let myVar = 'Hello world';
  
  const onClickHandler = () => {
   console.log('clicked');
   myVar = 'Goodbye';
   console.log(myVar);
  }
  
  return(
   <div className="App">
    <button onClick={onClickHandler}>Click Me</button>
    {myVar}
    </div>
  )};

export default App;
