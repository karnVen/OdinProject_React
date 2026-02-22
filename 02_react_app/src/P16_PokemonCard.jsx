// src/PokemonCard.jsx
import { useState, useEffect } from 'react';

export default function PokemonCard() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null); // New state for errors

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/25');
        
        // Throw an error if the status code is bad (like 404 or 500)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setPokemon(data.name);
      } catch (err) {
        // Catch the error and save it to state
        setError('Failed to fetch Pokemon.');
      }
    };

    fetchPokemon();
  }, []);

  // Show the error message if something went wrong
  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return <h2>Pokemon: {pokemon}</h2>;
}