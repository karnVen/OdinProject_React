import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // 1. Initialize as an ARRAY [], not a string. We want a list of cards.
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   // 2. Define the async logic inside
  //   const fetchPokemon = async () => {
  //     // A. Fetch the data for Pikachu (ID: 25)
  //     const response = await fetch('https://pokeapi.co/api/v2/pokemon/25');
      
  //     // B. Convert the "ticket" into readable JSON
  //     const data = await response.json();

  //     // C. Log it to prove it works (Open your browser console!)
  //     console.log(data);
  //     console.log(data.sprites.front_default); // This is your image
  //   };

  //   // 3. Call the function
  //   fetchPokemon();

  // }, []); // 4. THE GATEKEEPER: Empty array = Run Once.

  useEffect(() => {
    const fetchGameCards = async () => {
      // 1. Create an array of 12 IDs: [1, 2, 3, ... 12]
      const pokeIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

      // 2. Map over the IDs to create an array of PROMISES
      // (This fires off all 12 requests instantly)
      const dataPromises = pokeIds.map(async (id) => {
        // [FILL IN THIS PART]
        // A. Fetch the specific URL for this 'id'
        const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${id}` );
        // B. Return the json
        return response.json();
      });

      // 3. Wait for ALL promises to resolve
      const results = await Promise.all(dataPromises);
      const formattedCards = results.map((data) => ({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
      }));//clean cards 

      // 4. Log the final array of 12 objects
      console.log(formattedCards);
      
      // 5. Save ONLY the data we need (name and image) to state
      // (We will do this step next, just log 'results' for now)
    };

    fetchGameCards();
  }, []);

  return (
    <div>
      <h1>Check the Console</h1>
    </div>
  )
}

export default App