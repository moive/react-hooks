import axios from 'axios';

// constant
const initialData = {
    array: []
};

// types
const GET_POKEMONS_DONE = 'GET_POKEMONS_DONE';

// reducer
export default function pokeReducer(state=initialData, action) {
    switch (action.type) {
        case GET_POKEMONS_DONE:
            return {...state, array: action.payload}
    
        default:
            return state
    }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
        dispatch({
            type: GET_POKEMONS_DONE,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error);
    }
}