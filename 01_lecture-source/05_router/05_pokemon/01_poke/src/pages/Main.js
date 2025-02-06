import { useState, useEffect } from 'react';
import { getPokemonList } from '../apis/PokeAPI';
import { Link } from 'react-router-dom';


function Main() {

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function pokeke() {
            const data = await getPokemonList();

            setPokemonList(data.results);
        }

        pokeke();

    }, []);

    return (
        <div>
            <ul>{pokemonList.map((po, index) => <li key={index}>{po.name}</li>)} </ul>
        </div>
    );
}

export default Main;