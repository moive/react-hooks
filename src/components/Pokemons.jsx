import React from 'react'

import {useDispatch, useSelector}  from 'react-redux'
import {getPokemonsAction, nextPokemonAction} from '../redux/pokeDucks'

export const Pokemons = () => {
    const dispatch = useDispatch();

    const pokemons = useSelector(store => store.pokemons.array)
    
    return (
        <div className="mt-4">
            <div>List of pokemons</div>
            <button className="btn btn-primary mr-3" onClick={()=> dispatch(getPokemonsAction())}>Get pokemons</button>
            <button className="btn btn-primary" onClick={()=> dispatch(nextPokemonAction(20))}>next page</button>
            <ul>
                {
                    pokemons.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
