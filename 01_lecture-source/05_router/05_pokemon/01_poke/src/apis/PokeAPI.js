export async function getPokemonList() {
    
    const result = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = result.json();

    return data;
}