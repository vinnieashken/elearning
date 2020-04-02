import { SUBSCRIPTION_LOADED } from "./constants";

const initialState = {
    subscription: {},
    events: [],
    tenants: [],
    movies: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SUBSCRIPTION_LOADED:
            return Object.assign({}, state, {
                subscription: action.payload
            });

        default:
            return state;
    }
}

export default rootReducer;
