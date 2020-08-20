import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ nayoks, setNayoks] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])
  
  // const nayoks = [{name: 'Jasim', age: 56}, { name: 'DeepJol', age: 61}, {name: 'BappaRaz', age: 15}, {name: 'Omar Sani', age: 35}];

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);
  
  const handleClick = () => setCount(count + 1);
  
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
    return <h4>Movies I have acted: {props.movies}</h4>
}
function Nayok(props){
  // console.log(props)
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1> Ami Nayak-{props.name}</h1>
      <h3>I have done 5 movies in {props.age} years</h3>
    </div>
  )
}

export default App;
