import React from 'react';
import Pokedex from './Pokedex';
import pokemons from '../assets/data.js'

export default class Home extends React.Component {
  render() {
    return(
      <Pokedex pokemons={pokemons}/>
    );
  }
}