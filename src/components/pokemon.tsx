import React, { FunctionComponent } from "react";
import IPokemon from './IPokemon';

const Pokemon = (pokemon: IPokemon) => {

    return(
        <div>
            <div className="card">
                  <span className="card--id">#{pokemon.id}</span>
                  <img className="card--image" src={pokemon.image} alt={pokemon.name} />
                  <h1 className="card--name">{pokemon.name}</h1>
                  <span className="card--details">{pokemon.type}</span>
              </div>
        </div>
    );
}

export default Pokemon;