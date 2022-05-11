import React from 'react'
import { useState } from 'react';


const FetchComponent = () => {

    const [pokemons, setPokemons] = useState([]) 

    
    const fetchWithThen = () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setPokemons(response.results)
        }).catch(err=>{
            console.log(err);
        });
    }




  return (
    <div className='container'>
        
        <button className='btn btn-warning fw-bolder' onClick={fetchWithThen}>Fetch Pokemon</button>

        <div className='mt-5 bg-light border border-dark border border-5 fw-bold'>
            {
                pokemons.map((pokemon, i) => {
                    return (
                        <p className='m-2' key={i}>{pokemon.name}</p>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FetchComponent