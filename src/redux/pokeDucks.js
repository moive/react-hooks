import axios from 'axios';

// constant
const initialData = {
    array: [],
    offset: 0
};

// types
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
const NEXT_POKEMONS_SUCCESS = 'NEXT_POKEMONS_SUCCESS';

// reducer
export default function pokeReducer(state=initialData, action) {
    switch (action.type) {
        case GET_POKEMONS_SUCCESS:
            return {...state, array: action.payload}
        case NEXT_POKEMONS_SUCCESS:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default:
            return state
    }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
    
    const {offset} = getState().pokemons;
    
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        dispatch({
            type: GET_POKEMONS_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error);
    }
}

export const nextPokemonAction = (numPage=20)=> async (dispatch, getState)=> {

    const {offset} = getState().pokemons;
    const next = offset + numPage;
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`);
        dispatch({
            type: NEXT_POKEMONS_SUCCESS,
            payload: {
                array: res.data.results,
                offset: next
            }
        });

    } catch (error) {
        console.log(error);
    }
}