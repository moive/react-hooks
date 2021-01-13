import React from 'react'

import {useDispatch, useSelector}  from 'react-redux'
import {getPokemonsAction} from '../redux/pokeDucks'

export const Pokemons = () => {
    const dispatch = useDispatch();

    const pokemons = useSelector(store => store.pokemons.array)
    
    return (
        <div>
            List of pokemons
            <button onClick={()=> dispatch(getPokemonsAction())}>Get pokemons</button>
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
