const ENDPOINT = 'http://localhost:3000/pokemons.json'

const fetchPokemons = () => fetch(ENDPOINT).then(response => response.json());

export default fetchPokemons;