import * as actionTypes from './action-types';

export const getToken = () => dispatch => {
    fetch('https://localhost:5001/api/token/', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(async (result) => {

            let response = await result.json();

            dispatch({ type: actionTypes.GET_TOKEN, payload: JSON.parse(response) });
        });
}
            
