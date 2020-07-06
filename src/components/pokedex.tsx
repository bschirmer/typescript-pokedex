import React, { useEffect } from 'react';
import Pokemon from './pokemon';
import IPokemon from './IPokemon';

const Pokedex = () => {

    useEffect(() => {
        fetchData();
    }, []);

    const pokemons: number = 100;
    let pokemonArray: IPokemon[];

    const fetchData = (): void => {
        for (let i = 1; i <= pokemons; i++) {
            getPokemon(i);
        }
    }

    const getPokemon = async (id: number): Promise<void> => {
        const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemon: any = await data.json()
        const pokemonType: string = pokemon.types
          .map((poke: any) => poke.type.name)
          .join(", ")
      
        let transformedPokemon = {
          id: pokemon.id,
          name: pokemon.name,
          image: `${pokemon.sprites.front_default}`,
          type: pokemonType,
        }

        pokemonArray.push(transformedPokemon);
    }

    let pokepoke: IPokemon = {
        id: 1,
        name: 'pokename',
        image: 'sexi boi img',
        type: 'grass'
    }
    return(
        <div className="pokedex">
            <Pokemon 
                id={pokepoke.id}
                name={pokepoke.name}
                image={pokepoke.image}
                type={pokepoke.type}
            />
        </div>
    );
}

export default Pokedex;