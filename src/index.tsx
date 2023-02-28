import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter/Counter';
import { Pokemon } from './components/models/Pokemon';
import PokemonList from './components/PokemonList/PokemonList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let pokemon:Pokemon = {
  name: "ditto",
  level: 30,
  health: 100,
  damage:10,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
}

let listOfPokemon: Pokemon[] = [{
  name: "ditto",
  level: 30,
  health: 100,
  damage:10,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
},{
  name: "pikachu",
  level: 70,
  health: 300,
  damage:40,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
},{
  name: "something",
  level: 10,
  health: 50,
  damage:4,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png"
}]

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Counter />
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/pokeList" element={<PokemonList/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
