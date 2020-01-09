import * as actionTypes from './action-types';


export const getGlossaryItems = () => (dispatch, getState) => {
    const { authorization: { access_token } } = getState();

    fetch('https://localhost:5001/api/glossary?term=jwt', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    })
        .then(async (result) => {

            let response = await result.json();

            dispatch({ type: actionTypes.GET_GLOSSARY_ITEMS, payload: response })
        })
};