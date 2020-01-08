export function createReducer(initialState = null, actions = {}) {
    return (state = initialState, action) => {
        if (Object.prototype.hasOwnProperty.call(actions, action.type)) {
            console.log('actions', actions);
            return actions[action.type](state, action);
        }
        return state;
    };
}